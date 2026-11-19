/// <reference types="jquery" />

/** Pleasanter 1.5の画面スクリプト。通常のPleasanter画面上で使用する。 */
interface PleasanterApiInterface {
    /**
     * 現在のルート値。例: calendar、analy、kamban。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/get-site-info/script-action/
     */
    action(): string;

    /**
     * 現在のReferenceTypeを返す。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/get-site-info/script-table-name/
     */
    tableName(): string;

    /**
     * 現在のルートのcontroller値を返す。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/get-site-info/script-controller/
     */
    controller(): string;

    /**
     * $p.deptId
     * @see https://pleasanter.org/ja/manual/developers-guide/script/uncategorized/script-dept-id/
     */
    deptId(): number;

    /**
     * $p.id
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-id/
     */
    id(): number;

    /**
     * タイトル指定で未検出の場合はundefined。無引数では現在のサイトID。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-site-id/
     */
    siteId(): number;
    siteId(siteTitle: string): number | undefined;

    /**
     * 標準のPleasanter画面でログインID文字列を取得。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-login-id/
     */
    loginId(): string;

    /**
     * $p.userId
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-user-id/
     */
    userId(): number;

    /**
     * $p.userName
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-user-name/
     */
    userName(): string;

    /**
     * $p.groupIds
     * @see https://pleasanter.org/ja/manual/developers-guide/script/uncategorized/script-groupIds/
     */
    groupIds(): number[];

    /**
     * $p.getColumnName
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-get-column-name/
     */
    getColumnName(name: string): string | undefined;

    /**
     * 列がなければundefined。要素がなければ空のjQuery集合。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-get-control/
     */
    getControl(name: string): JQuery | undefined;

    /**
     * 列がなければundefined。要素がなければ空のjQuery集合。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-get-field/
     */
    getField(name: string): JQuery | undefined;

    /**
     * $p.getGridRow
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-get-grid-row/
     */
    getGridRow(recordId: number): JQuery<HTMLTableRowElement>;

    /**
     * $p.getGridCell
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-get-grid-cell/
     */
    getGridCell(recordId: number, name: string, excludeHistory?: boolean): JQuery<HTMLTableCellElement>;

    /**
     * 未検出は-1。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-get-column-index/
     */
    getGridColumnIndex(name: string): number;

    /**
     * $p.getValue
     * @see https://pleasanter.org/ja/manual/developers-guide/script/uncategorized/script-get-value/
     */
    getValue(name: string): string | string[] | boolean | null | undefined;

    /**
     * $p.on
     * @see https://pleasanter.org/ja/manual/developers-guide/script/value-operations/script-on/
     */
    on(
        events: string,
        name: string,
        func: (
            this: HTMLElement,
            event: JQuery.TriggeredEvent<Document, undefined, HTMLElement, HTMLElement>,
        ) => unknown,
    ): void;

    /**
     * 複数選択ではJSON配列文字列を渡す。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/update-site-info/script-set/
     */
    set(control: JQuery, value: string | number | boolean): void;

    /**
     * $p.clearMessage
     * @see https://pleasanter.org/ja/manual/developers-guide/script/site-message/script-clear-message/
     */
    clearMessage(): void;

    /**
     * valueはCss/Textを持つメッセージのJSON文字列。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/site-message/script-set-message/
     */
    setMessage(target: string, value: string): void;

    /**
     * $p.responsive
     * @see https://pleasanter.org/ja/manual/developers-guide/script/uncategorized/script-responsive/
     */
    responsive(): boolean;

    /**
     * 正常時はID配列、検証失敗時は画面指示配列、通信失敗時は-1。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/uncategorized/script-selected-ids/
     */
    selectedIds(): number[] | ResponseInstruction[] | -1;

    /**
     * プロセスを実行。sendの戻り値は返さない。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/uncategorized/script-execprocess/
     */
    execProcess(control: JQuery): void;

    /**
     * 中止時false、未送信時undefined、送信処理の結果は数値。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/uncategorized/script-send/
     */
    send(control: JQuery, formId?: string, async?: boolean, clearMessage?: boolean): number | false | undefined;

    /**
     * $p.apiUrl
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-url/
     */
    apiUrl(id: number, action: string, controller?: string): string;

    /**
     * $p.apiGet
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-get/
     */
    apiGet(request: KeyValuesGetRequest): JQuery.jqXHR<KeyValuesResponseData>;
    apiGet(request: StandardGetRequest): JQuery.jqXHR<GetResponseData>;
    apiGet(request: GetRequest): JQuery.jqXHR<GetResponseData | KeyValuesResponseData>;

    /**
     * $p.apiCreate
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-create/
     */
    apiCreate(request: CreateRequestArgument): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiUpdate
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-update/
     */
    apiUpdate(request: UpdateRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * Keysは空にできない。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-upsert/
     */
    apiUpsert(request: UpsertRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiDelete
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-delete/
     */
    apiDelete(request: DeleteRequestArgument): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiBulkDelete
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-bulk-delete/
     */
    apiBulkDelete(request: BulkDeleteRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiGetSite
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-get-site/
     */
    apiGetSite(request: GetSiteRequest): JQuery.jqXHR<SiteResponseData>;

    /**
     * $p.apiCreateSite
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-create-site/
     */
    apiCreateSite(request: UpdateSiteRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiUpdateSite
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-update-site/
     */
    apiUpdateSite(request: UpdateSiteRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiDeleteSite
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-delete-site/
     */
    apiDeleteSite(request: DeleteSiteRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiMoveSite
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-move-site/
     */
    apiMoveSite(request: MoveSiteRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiGetClosestSiteId
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-get-closest-siteid/
     */
    apiGetClosestSiteId(request: ClosestSiteRequest): JQuery.jqXHR<ClosestSiteResponse>;

    /**
     * id/dataの1オブジェクト。To/Cc/Bccの少なくとも1つが必要。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-send-mail/
     */
    apiSendMail(request: SendMailRequestArgument): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiUsersGet
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-users-get/
     */
    apiUsersGet(request: UsersGetRequest): JQuery.jqXHR<GetResponseUserData>;

    /**
     * $p.apiUsersCreate
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-users-create/
     */
    apiUsersCreate(request: UsersCreateRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiUsersUpdate
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-users-update/
     */
    apiUsersUpdate(request: UsersUpdateRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiUsersDelete
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-users-delete/
     */
    apiUsersDelete(request: UsersDeleteRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiDeptsGet
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-depts-get/
     */
    apiDeptsGet(request: DeptsGetRequest): JQuery.jqXHR<GetResponseDeptData>;

    /**
     * 要求データはdataに指定する。
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-depts-create/
     */
    apiDeptsCreate(request: DeptsCreateRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiDeptsUpdate
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-depts-update/
     */
    apiDeptsUpdate(request: DeptsUpdateRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiDeptsDelete
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-depts-delete/
     */
    apiDeptsDelete(request: DeptsDeleteRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiGroupsGet
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-groups-get/
     */
    apiGroupsGet(request: GetGroupsRequest): JQuery.jqXHR<GroupsResponse>;

    /**
     * $p.apiGroupsCreate
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-groups-create/
     */
    apiGroupsCreate(request: CreateGroupsArgument): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiGroupsUpdate
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-groups-update/
     */
    apiGroupsUpdate(request: UpdateGroupsRequest): JQuery.jqXHR<OperationResponseJSON>;

    /**
     * $p.apiGroupsDelete
     * @see https://pleasanter.org/ja/manual/developers-guide/script/script-api/script-api-groups-delete/
     */
    apiGroupsDelete(request: DeleteGroupsRequest): JQuery.jqXHR<OperationResponseJSON>;

    events: PleasanterApiEventInterface;
}

/** サーバーから返される画面更新指示。ValueはMethodによって異なる。 */
interface ResponseInstruction {
    Method: string;
    Target?: string | undefined;
    Value?: unknown;
    Options?: string | undefined;
}
interface EventData {
    ControlId?: string | undefined;
    [name: string]: unknown;
}
interface EventArguments {
    $control: JQuery | undefined;
    async: boolean | null | undefined;
    data: EventData | null | undefined;
    json: ResponseInstruction[] | null | undefined;
    methodType: string | null | undefined;
    ret: number | undefined;
    url: string | null | undefined;
}
type PleasanterCancelableEvent = "before_validate" | "after_validate" | "before_send";
type PleasanterNotificationEvent = "after_send" | "before_set" | "after_set";
type PleasanterCancelableHandler = ((arg: EventArguments) => boolean) | ((arg: EventArguments) => void);
interface PleasanterApiEventInterface {
    [name: `${PleasanterCancelableEvent}_${string}`]: PleasanterCancelableHandler | undefined;
    [name: `${PleasanterNotificationEvent}_${string}`]: ((arg: EventArguments) => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-editor-load/ */
    on_editor_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-grid-load/ */
    on_grid_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-calendar-load/ */
    on_calendar_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-crosstab-load/ */
    on_crosstab_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-gantt-load/ */
    on_gantt_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-burndown-load/ */
    on_burndown_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-timeseries-load/ */
    on_timeseries_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-analy-load/ */
    on_analy_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-on-kamban-load/ */
    on_kamban_load?: (() => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-before-validate/ */
    before_validate?: PleasanterCancelableHandler | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-after-validate/ */
    after_validate?: PleasanterCancelableHandler | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-before-send/ */
    before_send?: PleasanterCancelableHandler | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-after-send/ */
    after_send?: ((arg: EventArguments) => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-before-set/ */
    before_set?: ((arg: EventArguments) => void) | undefined;
    /** @see https://pleasanter.org/ja/manual/developers-guide/script/events/script-events-after-set/ */
    after_set?: ((arg: EventArguments) => void) | undefined;
}
interface SetMessageArgumentType {
    Css: "alert-success" | "alert-warning" | "alert-error";
    Text: string;
}
type PleasanterLetter =
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";
type PleasanterDigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type PleasanterColumnSuffix = PleasanterLetter | Exclude<`0${PleasanterDigit}${PleasanterDigit}`, "000"> | "100";
type ClassHash = Partial<Record<`Class${PleasanterColumnSuffix}`, string>>;
type NumHash = Partial<Record<`Num${PleasanterColumnSuffix}`, number | null>>;
type DateHash = Partial<Record<`Date${PleasanterColumnSuffix}`, string>>;
type DescriptionHash = Partial<Record<`Description${PleasanterColumnSuffix}`, string>>;
type CheckHash = Partial<Record<`Check${PleasanterColumnSuffix}`, boolean>>;
type AttachmentsHash = Partial<Record<`Attachments${PleasanterColumnSuffix}`, AttachmentsData[]>>;

interface AttachmentsData {
    Guid?: string | undefined;
    Name?: string | undefined;
    ReferenceId?: number | undefined;
    Size?: number | undefined;
    Extension?: string | undefined;
    ContentType?: string | undefined;
    Added?: boolean | undefined;
    Deleted?: boolean | undefined;
    Base64?: string | undefined;
    Action?: string | undefined;
    FileName?: string | undefined;
    Base64Binary?: string | undefined;
    HashCode?: string | undefined;
    Overwritten?: boolean | undefined;
}
interface AttachmentUpload extends AttachmentsData {
    Name: string;
    ContentType: string;
    Base64: string;
}
interface AttachmentDelete extends AttachmentsData {
    Guid: string;
    Deleted: true;
}
interface PleasanterHashes {
    ClassHash?: ClassHash | undefined;
    NumHash?: NumHash | undefined;
    DateHash?: DateHash | undefined;
    DescriptionHash?: DescriptionHash | undefined;
    CheckHash?: CheckHash | undefined;
    AttachmentsHash?: AttachmentsHash | undefined;
}
interface PleasanterApiData {
    ApiVersion?: number | undefined;
    ApiKey?: string | undefined;
    Token?: string | undefined;
    SsCache?: boolean | undefined;
    Offset?: number | undefined;
    PageSize?: number | undefined;
}
type PleasanterLegacyColumns =
    & ClassHash
    & NumHash
    & DateHash
    & DescriptionHash
    & CheckHash
    & Partial<Record<`Attachments${PleasanterColumnSuffix}`, string>>;
interface RecordDataItems extends PleasanterHashes, PleasanterLegacyColumns {
    SiteId?: number | undefined;
    IssueId?: number | undefined;
    ResultId?: number | undefined;
    UpdatedTime?: string | undefined;
    Ver?: number | undefined;
    Title?: string | undefined;
    Body?: string | undefined;
    StartTime?: string | undefined;
    CompletionTime?: string | undefined;
    WorkValue?: number | undefined;
    ProgressRate?: number | undefined;
    RemainingWorkValue?: number | undefined;
    Status?: number | undefined;
    Manager?: number | undefined;
    Owner?: number | undefined;
    Locked?: boolean | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    ItemTitle?: string | undefined;
}
interface PleasanterImageData {
    HeadNewLine?: boolean | undefined;
    EndNewLine?: boolean | undefined;
    Position?: number | undefined;
    Alt?: string | undefined;
    Extension?: string | undefined;
    Base64?: string | undefined;
}
interface RecordWriteData extends RecordDataItems, PleasanterApiData {
    VerUp?: boolean | undefined;
    ProcessId?: number | undefined;
    ProcessIds?: number[] | undefined;
    ImageHash?: Record<string, PleasanterImageData> | undefined;
    RecordPermissions?: string[] | undefined;
}
interface OperationResponseJSON {
    Id: number;
    Message: string;
    StatusCode: number;
    LimitPerDate?: number | undefined;
    LimitRemaining?: number | undefined;
}
/** 通信障害ではresponseJSONが存在しない場合がある。 */
type FailDataType = JQuery.jqXHR<unknown>;
interface PleasanterCallbacks<T> {
    done?: ((data: T, textStatus: JQuery.Ajax.SuccessTextStatus, xhr: JQuery.jqXHR<T>) => void) | undefined;
    fail?: ((xhr: FailDataType, textStatus: JQuery.Ajax.ErrorTextStatus, errorThrown: string) => void) | undefined;
    always?: JQuery.jqXHR.AlwaysCallback<T, FailDataType> | undefined;
    async?: boolean | undefined;
}
interface AbstractRequestInterface<T> extends PleasanterCallbacks<T> {
    id: number;
}
interface AbstractRequestInterfaceWithData<T, D = void> extends AbstractRequestInterface<T> {
    data?: D | undefined;
}
type PleasanterWriteRequest<T, D> = AbstractRequestInterface<T> & { data: D };
type PleasanterListRequest<T> = PleasanterCallbacks<T> & {
    id?: number | undefined;
    data?: DataOfGetRequest | undefined;
};
type PleasanterCreateRequest<D> = PleasanterCallbacks<OperationResponseJSON> & { data: D };
interface PleasanterPageData<T> {
    Offset: number;
    PageSize: number;
    TotalCount: number;
    Data: T[];
}
interface PleasanterPage<T> {
    StatusCode: number;
    LimitPerDate?: number | undefined;
    LimitRemaining?: number | undefined;
    Response: PleasanterPageData<T>;
}
type GetResponseData = PleasanterPage<RecordDataItems>;
type KeyValuesResponseData = PleasanterPage<Record<string, unknown>>;
interface DataOfGetRequest extends PleasanterApiData {
    View?: ViewItems | undefined;
    TableType?: "Normal" | "History" | "NormalAndHistory" | undefined;
}
type StandardGetData = Omit<DataOfGetRequest, "View"> & {
    View?: (Omit<ViewItems, "ApiDataType"> & { ApiDataType?: 0 | "Default" | undefined }) | undefined;
};
type KeyValuesGetData = Omit<DataOfGetRequest, "View"> & {
    View: Omit<ViewItems, "ApiDataType"> & { ApiDataType: 1 | "KeyValues" };
};
type StandardGetRequest = AbstractRequestInterfaceWithData<GetResponseData, StandardGetData>;
type KeyValuesGetRequest = PleasanterWriteRequest<KeyValuesResponseData, KeyValuesGetData>;
type GetRequest = AbstractRequestInterfaceWithData<GetResponseData | KeyValuesResponseData, DataOfGetRequest>;
type CreateRequestArgument = PleasanterWriteRequest<OperationResponseJSON, RecordWriteData>;
type UpdateRequest = PleasanterWriteRequest<OperationResponseJSON, RecordWriteData>;
type DeleteRequestArgument = AbstractRequestInterfaceWithData<OperationResponseJSON, PleasanterApiData>;
type UpsertRequest = PleasanterWriteRequest<OperationResponseJSON, RecordWriteData & { Keys: string[] }>;
interface BulkDeleteData extends PleasanterApiData {
    View?: ViewItems | undefined;
    Selected?: number[] | undefined;
    /** trueの場合、Selectedは除外ID。 */
    All?: boolean | undefined;
    GridCheck?: boolean | undefined;
    PhysicalDelete?: boolean | undefined;
}
type BulkDeleteRequest = PleasanterWriteRequest<OperationResponseJSON, BulkDeleteData>;
type GetSiteRequest = AbstractRequestInterfaceWithData<SiteResponseData, PleasanterApiData>;
interface SiteResponseData {
    StatusCode: number;
    Response: SiteResponse;
}
interface SiteResponse {
    Data: SiteData;
}
type DeleteSiteRequest = AbstractRequestInterfaceWithData<OperationResponseJSON, PleasanterApiData>;
type UpdateSiteRequest = PleasanterWriteRequest<OperationResponseJSON, SiteData & PleasanterApiData>;
type MoveSiteRequest = PleasanterWriteRequest<OperationResponseJSON, PleasanterApiData & { ParentId: number }>;
type ClosestSiteRequest = PleasanterWriteRequest<ClosestSiteResponse, PleasanterApiData & { FindSiteNames: string[] }>;
interface ClosestSiteResponse {
    StatusCode: number;
    SiteId: number;
    Data: Array<{ SiteName: string; SiteId: number }>;
}
interface SiteData extends PleasanterHashes, PleasanterLegacyColumns {
    TenantId?: number | undefined;
    SiteId?: number | undefined;
    UpdatedTime?: string | undefined;
    Ver?: number | undefined;
    Title?: string | undefined;
    Body?: string | undefined;
    SiteName?: string | undefined;
    SiteGroupName?: string | undefined;
    GridGuide?: string | undefined;
    EditorGuide?: string | undefined;
    CalendarGuide?: string | undefined;
    CrosstabGuide?: string | undefined;
    GanttGuide?: string | undefined;
    BurnDownGuide?: string | undefined;
    TimeSeriesGuide?: string | undefined;
    AnalyGuide?: string | undefined;
    KambanGuide?: string | undefined;
    ImageLibGuide?: string | undefined;
    ReferenceType?: string | undefined;
    ParentId?: number | undefined;
    InheritPermission?: number | undefined;
    Permissions?: string[] | undefined;
    SiteSettings?: SiteSettings | undefined;
    Publish?: boolean | undefined;
    DisableCrossSearch?: boolean | undefined;
    EnableSsCache?: boolean | undefined;
    LockedTime?: string | undefined;
    LockedUser?: number | undefined;
    ApiCountDate?: string | undefined;
    ApiCount?: number | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    ItemTitle?: string | undefined;
    DisableSiteCreatorPermission?: boolean | undefined;
}

interface SiteSettings {
    Version?: number | undefined;
    ReferenceType?: string | undefined;
    EditorColumnHash?: EditorColumnHash | undefined;
    GridColumns?: string[] | undefined;
    Columns?: Column[] | undefined;
    Scripts?: Script[] | undefined;
    NoDisplayIfReadOnly?: boolean | undefined;
}
interface EditorColumnHash {
    [tabName: string]: string[] | undefined;
}
interface Column {
    ColumnName?: string | undefined;
    Description?: string | undefined;
    ChoicesText?: string | undefined;
    EditorFormat?: string | undefined;
    LabelText?: string | undefined;
    NoWrap?: boolean | undefined;
}
interface Script {
    Id?: number | undefined;
    Title?: string | undefined;
    Body?: string | undefined;
    All?: boolean | undefined;
    New?: boolean | undefined;
    Edit?: boolean | undefined;
    Index?: boolean | undefined;
    Calendar?: boolean | undefined;
    Crosstab?: boolean | undefined;
    Gantt?: boolean | undefined;
    BurnDown?: boolean | undefined;
    TimeSeries?: boolean | undefined;
    Analy?: boolean | undefined;
    Kamban?: boolean | undefined;
    ImageLib?: boolean | undefined;
    Disabled?: boolean | undefined;
    DraftOutputMode?: number | undefined;
    DraftKey?: string | undefined;
}
interface UserResponseData extends PleasanterHashes, PleasanterLegacyColumns {
    TenantId?: number | undefined;
    UserId?: number | undefined;
    Ver?: number | undefined;
    LoginId?: string | undefined;
    GlobalId?: string | undefined;
    Name?: string | undefined;
    UserCode?: string | undefined;
    LastName?: string | undefined;
    FirstName?: string | undefined;
    Birthday?: string | undefined;
    Gender?: string | undefined;
    Language?: string | undefined;
    TimeZone?: string | undefined;
    DeptCode?: string | undefined;
    DeptId?: number | undefined;
    Manager?: number | undefined;
    Theme?: string | undefined;
    FirstAndLastNameOrder?: number | undefined;
    Body?: string | undefined;
    LastLoginTime?: string | undefined;
    PasswordExpirationTime?: string | undefined;
    PasswordChangeTime?: string | undefined;
    NumberOfLogins?: number | undefined;
    NumberOfDenial?: number | undefined;
    TenantManager?: boolean | undefined;
    ServiceManager?: boolean | undefined;
    AllowCreationAtTopSite?: boolean | undefined;
    AllowGroupAdministration?: boolean | undefined;
    AllowGroupCreation?: boolean | undefined;
    AllowApi?: boolean | undefined;
    AllowMovingFromTopSite?: boolean | undefined;
    EnableSecondaryAuthentication?: boolean | undefined;
    DisableSecondaryAuthentication?: boolean | undefined;
    Disabled?: boolean | undefined;
    Lockout?: boolean | undefined;
    LockoutCounter?: number | undefined;
    Developer?: boolean | undefined;
    UserSettings?: string | undefined;
    PasswordHistries?: string | undefined;
    SecondaryAuthenticationCode?: string | undefined;
    SecondaryAuthenticationCodeExpirationTime?: string | undefined;
    LdapSearchRoot?: string | undefined;
    SynchronizedTime?: string | undefined;
    SecretKey?: string | undefined;
    EnableSecretKey?: boolean | undefined;
    LoginExpirationLimit?: string | undefined;
    LoginExpirationPeriod?: number | undefined;
    ScimId?: string | undefined;
    ScimExternalId?: string | undefined;
    ScimSync?: boolean | undefined;
    UiType?: string | undefined;
    UiColorScheme?: string | undefined;
    UiMainColor?: string | undefined;
    UiSubColor?: string | undefined;
    UiBackgroundColor?: string | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    UpdatedTime?: string | undefined;
    MailAddresses?: string[] | undefined;
}
interface UserCreateData extends UserResponseData, PleasanterApiData {
    Password?: string | undefined;
}
type UserUpdateData = UserResponseData & PleasanterApiData;
interface DeptData extends PleasanterHashes, PleasanterLegacyColumns {
    TenantId?: number | undefined;
    DeptId?: number | undefined;
    Ver?: number | undefined;
    DeptCode?: string | undefined;
    DeptName?: string | undefined;
    Body?: string | undefined;
    Disabled?: boolean | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    UpdatedTime?: string | undefined;
}
interface GroupsData extends PleasanterHashes, PleasanterLegacyColumns {
    TenantId?: number | undefined;
    GroupId?: number | undefined;
    Ver?: number | undefined;
    GroupName?: string | undefined;
    Body?: string | undefined;
    Disabled?: boolean | undefined;
    LdapSync?: boolean | undefined;
    LdapGuid?: string | undefined;
    LdapSearchRoot?: string | undefined;
    SynchronizedTime?: string | undefined;
    ScimId?: string | undefined;
    ScimExternalId?: string | undefined;
    ScimSync?: boolean | undefined;
    Comments?: string | undefined;
    Creator?: number | undefined;
    Updator?: number | undefined;
    CreatedTime?: string | undefined;
    UpdatedTime?: string | undefined;
    GroupMembers?: string[] | undefined;
    GroupChildren?: string[] | undefined;
}
type GetResponseUserData = PleasanterPage<UserResponseData>;
type GetResponseDeptData = PleasanterPage<DeptData>;
type GroupsResponse = PleasanterPage<GroupsData>;
type GroupsResponseData = PleasanterPageData<GroupsData>;
type UsersGetRequest = PleasanterListRequest<GetResponseUserData>;
type UsersCreateRequest = PleasanterCreateRequest<UserCreateData>;
type UsersUpdateRequest = PleasanterWriteRequest<OperationResponseJSON, UserUpdateData>;
type UsersDeleteRequest = AbstractRequestInterface<OperationResponseJSON>;
type DeptsGetRequest = PleasanterListRequest<GetResponseDeptData>;
type DeptsCreateRequest = PleasanterCreateRequest<DeptData & PleasanterApiData>;
type DeptsUpdateRequest = PleasanterWriteRequest<OperationResponseJSON, DeptData & PleasanterApiData>;
type DeptsDeleteRequest = AbstractRequestInterface<OperationResponseJSON>;
type GetGroupsRequest = PleasanterListRequest<GroupsResponse>;
type CreateGroupsArgument = PleasanterCreateRequest<GroupsData & PleasanterApiData>;
type UpdateGroupsRequest = PleasanterWriteRequest<OperationResponseJSON, GroupsData & PleasanterApiData>;
type DeleteGroupsRequest = AbstractRequestInterface<OperationResponseJSON>;
interface PleasanterMailData extends PleasanterApiData {
    From?: string | undefined;
    To?: string | undefined;
    Cc?: string | undefined;
    Bcc?: string | undefined;
    Title?: string | undefined;
    Body?: string | undefined;
    Attachments?: AttachmentsData[] | undefined;
}
/** 宛先は少なくとも1つ必要。空文字や権限はサーバーが検証する。 */
type SendMailRequest = PleasanterMailData & ({ To: string } | { Cc: string } | { Bcc: string });
type SendMailRequestArgument = PleasanterWriteRequest<OperationResponseJSON, SendMailRequest>;
type PleasanterSearchType =
    | "PartialMatch"
    | "ExactMatch"
    | "ForwardMatch"
    | "PartialMatchMultiple"
    | "ExactMatchMultiple"
    | "ForwardMatchMultiple";
interface PleasanterApiColumn {
    KeyDisplayType?: 0 | 1 | "LabelText" | "ColumnName" | undefined;
    ValueDisplayType?: 0 | 1 | 2 | "DisplayValue" | "Value" | "Text" | undefined;
}
interface ViewItems {
    Incomplete?: boolean | undefined;
    Own?: boolean | undefined;
    NearCompletionTime?: boolean | undefined;
    Delay?: boolean | undefined;
    Overdue?: boolean | undefined;
    Search?: string | undefined;
    GridColumns?: string[] | undefined;
    ColumnFilterHash?: Record<string, string> | undefined;
    ColumnFilterExpressions?: Record<string, string> | undefined;
    ColumnSorterHash?: Record<string, "asc" | "desc"> | undefined;
    ColumnFilterSearchTypes?: Record<string, PleasanterSearchType> | undefined;
    ColumnFilterNegatives?: string[] | undefined;
    ApiDataType?: 0 | 1 | "Default" | "KeyValues" | undefined;
    ApiColumnKeyDisplayType?: PleasanterApiColumn["KeyDisplayType"] | undefined;
    ApiColumnValueDisplayType?: PleasanterApiColumn["ValueDisplayType"] | undefined;
    ApiColumnHash?: Record<string, PleasanterApiColumn> | undefined;
    MergeSessionViewFilters?: boolean | undefined;
    MergeSessionViewSorters?: boolean | undefined;
}
declare const $p: PleasanterApiInterface;
