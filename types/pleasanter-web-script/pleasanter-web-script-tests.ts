// These examples are checked by dtslint; they do not send requests to a running server.
$p.tableName(); // $ExpectType string
$p.controller(); // $ExpectType string
$p.action(); // $ExpectType string
$p.id(); // $ExpectType number
$p.siteId(); // $ExpectType number
$p.siteId("Requests"); // $ExpectType number | undefined
$p.loginId(); // $ExpectType string
$p.userId(); // $ExpectType number
$p.userName(); // $ExpectType string
$p.deptId(); // $ExpectType number
$p.groupIds(); // $ExpectType number[]
$p.responsive(); // $ExpectType boolean
$p.getColumnName("Title"); // $ExpectType string | undefined
$p.getControl("Title"); // $ExpectType JQuery<HTMLElement> | undefined
$p.getField("Title"); // $ExpectType JQuery<HTMLElement> | undefined
$p.getGridRow(1); // $ExpectType JQuery<HTMLTableRowElement>
$p.getGridCell(1, "Title", true); // $ExpectType JQuery<HTMLTableCellElement>
$p.getGridColumnIndex("Title"); // $ExpectType number
$p.getValue("ClassA"); // $ExpectType string | boolean | string[] | null | undefined

const control = $p.getControl("Title");
if (control) {
    control.val(); // $ExpectType string | number | string[] | undefined
    $p.set(control, "Updated");
    $p.set(control, 42);
    $p.set(control, true);
}
$p.set($("#ClassA"), JSON.stringify(["A", "B"]));
$p.on("change", "Title", function(event) {
    this; // $ExpectType HTMLElement
    event.delegateTarget; // $ExpectType Document
    $(this).val();
});
$p.clearMessage();
const message: SetMessageArgumentType = { Css: "alert-success", Text: "Saved" };
$p.setMessage("#Message", JSON.stringify(message));
$p.execProcess($("#Process_1")); // $ExpectType void
$p.send($("#Update"), "MainForm", false, false); // $ExpectType number | false | undefined
$p.selectedIds(); // $ExpectType number[] | ResponseInstruction[] | -1
const selected = $p.selectedIds();
if (selected !== -1) {
    selected.forEach(value => {
        if (typeof value === "number") {
            value.toFixed();
        } else {
            value.Method; // $ExpectType string
            value.Value; // $ExpectType unknown
        }
    });
}

$p.apiUrl(1, "upsert", "items"); // $ExpectType string
$p.apiGet({ id: 1 }).done(response => {
    response.Response.Data; // $ExpectType RecordDataItems[]
});
$p.apiGet({
    id: 1,
    data: {
        ApiVersion: 1.1,
        PageSize: 10,
        Offset: 0,
        SsCache: true,
        View: {
            ColumnFilterHash: { ClassA: "[\"A\"]" },
            ColumnFilterSearchTypes: { ClassA: "ExactMatchMultiple" },
            ColumnSorterHash: { UpdatedTime: "desc" },
            ColumnFilterNegatives: ["ClassB"],
        },
    },
    done(response, status, xhr) {
        response.Response.Data; // $ExpectType RecordDataItems[]
        status; // $ExpectType SuccessTextStatus
        xhr.status; // $ExpectType number
    },
    fail(xhr, status, errorThrown) {
        xhr.status; // $ExpectType number
        status; // $ExpectType ErrorTextStatus
        errorThrown; // $ExpectType string
    },
    always(...args) {
        if (args[1] === "success") {
            args[0].Response.Data; // $ExpectType RecordDataItems[]
        }
    },
});
$p.apiGet({
    id: 1,
    data: {
        View: {
            ApiDataType: "KeyValues",
            GridColumns: ["Title"],
            ApiColumnHash: { Title: { ValueDisplayType: "Text" } },
        },
    },
    done(response) {
        response.Response.Data; // $ExpectType Record<string, unknown>[]
        response.Response.Data[0].Title; // $ExpectType unknown
    },
});
const variableView: ViewItems = { ApiDataType: 1 };
$p.apiGet({ id: 1, data: { View: variableView } }).done(response => {
    response.Response.Data; // $ExpectType RecordDataItems[] | Record<string, unknown>[]
});

const upload: AttachmentUpload = { Name: "a.txt", ContentType: "text/plain", Base64: "YQ==" };
const deleteAttachment: AttachmentDelete = { Guid: "attachment-guid", Deleted: true };
const item: RecordWriteData = {
    ApiVersion: 1.1,
    Title: "Example",
    Status: 100,
    WorkValue: 1.5,
    UpdatedTime: "2026-11-19T00:00:00",
    ClassHash: { ClassA: "[\"A\",\"B\"]", Class001: "A", Class100: "B" },
    NumHash: { Num001: 10, NumZ: null },
    DateHash: { Date100: "2026-11-19" },
    DescriptionHash: { Description001: "Description" },
    CheckHash: { Check100: true },
    AttachmentsHash: { AttachmentsA: [upload, deleteAttachment] },
    VerUp: true,
    ProcessId: 1,
    ProcessIds: [1, 2],
    ImageHash: { DescriptionA: { Alt: "Example", Extension: ".png", Base64: "aW1hZ2U=" } },
};
$p.apiCreate({ id: 1, data: item }).done(result => {
    result.Id; // $ExpectType number
    result.Message; // $ExpectType string
    result.LimitRemaining; // $ExpectType number | undefined
});
$p.apiUpdate({ id: 2, data: { Status: 200, WorkValue: 2.5 } });
const keys: string[] = ["ClassA"];
$p.apiUpsert({ id: 1, data: { Keys: keys, Title: "Upsert" } });
$p.apiDelete({ id: 2, data: { ApiVersion: 1.1 } });
$p.apiBulkDelete({
    id: 1,
    async: false,
    data: { All: true, Selected: [2], View: { Search: "old" }, PhysicalDelete: true },
}).done(result => {
    result.Id; // $ExpectType number
});
$p.apiBulkDelete({ id: 1, data: { GridCheck: true } });

$p.apiGetSite({ id: 1 }).done(result => {
    result.Response.Data.Permissions; // $ExpectType string[] | undefined
    result.Response.Data.SiteSettings?.GridColumns; // $ExpectType string[] | undefined
});
$p.apiCreateSite({
    id: 1,
    data: {
        Title: "New site",
        ReferenceType: "Results",
        DisableSiteCreatorPermission: true,
        Permissions: ["Group,1,1"],
        SiteSettings: {
            GridColumns: ["Title"],
            EditorColumnHash: { General: ["Title"], Details: ["Body"] },
            Columns: [{ ColumnName: "Title", LabelText: "Subject" }],
            Scripts: [{ Title: "Script", Body: "console.log(1)", Analy: true }],
        },
    },
});
$p.apiUpdateSite({ id: 1, data: { Title: "Renamed" } });
$p.apiMoveSite({ id: 1, data: { ParentId: 0 } });
$p.apiDeleteSite({ id: 1 }).done(result => {
    result.StatusCode; // $ExpectType number
});
$p.apiGetClosestSiteId({ id: 1, data: { FindSiteNames: ["Requests"] } }).done(result => {
    result.SiteId; // $ExpectType number
    result.Data[0].SiteName; // $ExpectType string
});
$p.apiUsersGet({ data: { View: { Search: "user" }, PageSize: 5 } }).done(result => {
    result.Response.Data[0].LoginId; // $ExpectType string | undefined
});
$p.apiUsersGet({ id: 1 });
$p.apiUsersCreate({ data: { LoginId: "new", Name: "New", Password: "example", MailAddresses: ["new@example.com"] } });
$p.apiUsersUpdate({ id: 1, data: { Name: "Changed", LastName: "Example", ClassHash: { Class001: "A" } } });
$p.apiUsersDelete({ id: 1 });
$p.apiDeptsGet({ data: { View: { ColumnFilterHash: { DeptCode: "D01" } } } }).done(result => {
    result.Response.Data[0].DeptId; // $ExpectType number | undefined
});
$p.apiDeptsCreate({ data: { DeptName: "Engineering", DeptCode: "D01" } });
$p.apiDeptsUpdate({ id: 1, data: { Disabled: true } });
$p.apiDeptsDelete({ id: 1 });
$p.apiGroupsGet({ data: { View: { Search: "group" } } }).done(result => {
    result.Response.Data[0].GroupChildren; // $ExpectType string[] | undefined
});
$p.apiGroupsCreate({ data: { GroupName: "Team", GroupMembers: ["User,1"], GroupChildren: ["Group,2"] } });
$p.apiGroupsUpdate({ id: 1, data: { GroupName: "Updated" } }).done(result => {
    result.Id; // $ExpectType number
});
$p.apiGroupsDelete({ id: 1 }).done(result => {
    result.Message; // $ExpectType string
});
$p.apiSendMail({ id: 1, data: { To: "to@example.com", Title: "Subject", Body: "Message" } });
$p.apiSendMail({ id: 1, data: { Cc: "cc@example.com" } }).done(result => {
    result.Id; // $ExpectType number
});
$p.apiSendMail({ id: 1, data: { Bcc: "bcc@example.com", Attachments: [upload] } });

$p.events.on_editor_load = () => {
    $p.userId();
};
$p.events.on_grid_load = () => {
    $p.userId();
};
$p.events.on_calendar_load = () => {
    $p.userId();
};
$p.events.on_crosstab_load = () => {
    $p.userId();
};
$p.events.on_gantt_load = () => {
    $p.userId();
};
$p.events.on_burndown_load = () => {
    $p.userId();
};
$p.events.on_timeseries_load = () => {
    $p.userId();
};
$p.events.on_analy_load = () => {
    $p.userId();
};
$p.events.on_kamban_load = () => {
    $p.userId();
};

$p.events.before_validate = arg => {
    arg.$control?.val();
    arg.data?.ControlId; // $ExpectType string | undefined
    return false;
};
$p.events.after_validate = arg => {
    arg.url;
};
$p.events.before_send = arg => {
    return arg.async !== false;
};
$p.events.after_send = arg => {
    arg.ret; // $ExpectType number | undefined
};
$p.events.before_set = arg => {
    arg.json?.forEach(value => {
        value.Method;
    });
};
$p.events.after_set = arg => {
    arg.methodType;
};
$p.events.before_send_Update = arg => {
    return arg.data?.ControlId !== "Cancel";
};
$p.events.after_set_MainForm = arg => {
    arg.$control?.hide();
};
$p.events.on_grid_load?.();
const events: PleasanterApiEventInterface = {};
events.before_validate = () => {};

function checkArguments(arg: EventArguments) {
    arg.json?.forEach(instruction => {
        instruction.Value; // $ExpectType unknown
    });
}

checkArguments({
    $control: undefined,
    async: undefined,
    data: null,
    json: undefined,
    methodType: null,
    ret: undefined,
    url: null,
});

// @ts-expect-error The control is a jQuery collection.
$p.set("Title", "value");
// @ts-expect-error Multiple selections are JSON strings.
$p.set($("#ClassA"), ["A"]);
// @ts-expect-error loginId returns a string.
const numericLogin: number = $p.loginId();
// @ts-expect-error Keys is required.
$p.apiUpsert({ id: 1, data: { Title: "Missing keys" } });
// @ts-expect-error Selected contains numeric IDs.
$p.apiBulkDelete({ id: 1, data: { Selected: ["1"] } });
// @ts-expect-error ParentId is required for a move.
$p.apiMoveSite({ id: 1, data: {} });
// @ts-expect-error The implementation reads data, not payload.
$p.apiDeptsCreate({ payload: { DeptName: "Invalid" } });
// @ts-expect-error Mail uses one request object.
$p.apiSendMail(1, { To: "to@example.com" });
// @ts-expect-error Mail needs at least one recipient.
$p.apiSendMail({ id: 1, data: { Title: "No recipient" } });
// @ts-expect-error Standard API Status is numeric.
$p.apiUpdate({ id: 1, data: { Status: "100" } });
// @ts-expect-error API classification values are strings, including encoded multiple selections.
$p.apiUpdate({ id: 1, data: { ClassHash: { ClassA: ["A"] } } });
// @ts-expect-error Extended columns end at 100.
$p.apiUpdate({ id: 1, data: { ClassHash: { Class101: "A" } } });
// @ts-expect-error Numbered columns start at 001.
$p.apiUpdate({ id: 1, data: { NumHash: { Num000: 1 } } });
// @ts-expect-error Callbacks receive an event argument, not a string.
$p.events.before_send = (arg: string) => false;
// @ts-expect-error Unsupported event names are not accepted.
$p.events.on_unknown_load = () => {};
// @ts-expect-error Password is supported for user creation, not user updates.
$p.apiUsersUpdate({ id: 1, data: { Password: "invalid" } });

$p.apiGet({ id: 1, data: { ApiVersion: 1.0 } }).done(result => {
    result.Response.Data[0].Class001; // $ExpectType string | undefined
});
$p.apiUpdate({ id: 1, data: { ApiVersion: 1.0, Class001: "Legacy" } });
// @ts-expect-error Images are objects with Base64 and metadata.
$p.apiCreate({ id: 1, data: { ImageHash: { DescriptionA: "raw" } } });
