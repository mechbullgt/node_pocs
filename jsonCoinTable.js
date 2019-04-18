var json_visible = !0,
    json_pnl_size = 0,
    table_visible = !0,
    tree_visible = !0,
    tree_pnl_size = 0,
    xxa_pnl_size = 0;
jQuery(function (a) {
    function e() {
        json_visible ? (a("#all_panels").split().position(a("#all_panels").width() - xxa_pnl_size - 2), table_visible && tree_visible ? a("#xxa").split().position(xxa_pnl_size - tree_pnl_size - 2) : !table_visible && tree_visible ? a("#xxa").split().position(0) : table_visible && !tree_visible ? a("#xxa").split().position(xxa_pnl_size) : table_visible || tree_visible || a("#all_panels").split().position(a("#all_panels").width())) : (a("#all_panels").split().position(0), table_visible && tree_visible ? a("#xxa").split().position(xxa_pnl_size -
            tree_pnl_size - 2) : !table_visible && tree_visible ? a("#xxa").split().position(0) : table_visible && !tree_visible && a("#xxa").split().position(a("#all_panels").width() - 2))
    }
    a("#all_panels").split({
        orientation: "vertical",
        limit: 0,
        position: "33%"
    });
    a("#xxa").split({
        orientation: "vertical",
        limit: 0,
        position: "50%"
    });
    tree_pnl_size = a("#tree_pnl").width();
    json_pnl_size = a("#json_pnl").width();
    xxa_pnl_size = a("#xxa").width();
    a("#all_panels").split().settings.onDrag = function () {
        json_visible ? (json_pnl_size = a("#json_pnl").width(),
            xxa_pnl_size = a("#xxa").width(), table_visible && tree_visible ? a("#xxa").split().position(xxa_pnl_size - tree_pnl_size - 2) : table_visible && !tree_visible ? a("#xxa").split().position(xxa_pnl_size - 2) : !table_visible && tree_visible && a("#xxa").split().position(0)) : a("#all_panels").split().position(0)
    };
    a("#xxa").split().settings.onDrag = function () {
        !table_visible && tree_visible ? a("#xxa").split().position(0) : tree_pnl_size = a("#tree_pnl").width()
    };
    a("#jsonViewMenu").click(function () {
        if (table_visible || tree_visible) a("#jsonLi").toggleClass("active "),
            json_visible = !json_visible, e()
    });
    a("#tableViewMenu").click(function () {
        if (json_visible || tree_visible) a("#tableLi").toggleClass("active "), table_visible = !table_visible, e()
    });
    a("#treeViewMenu").click(function () {
        if (json_visible || table_visible) a("#treeLi").toggleClass("active "), tree_visible = !tree_visible, e()
    });
    a("#load_json_btn").click(function () {
        processJson()
    });
    a("#aboutLnk").click(function () {
        a("#leaveMsg").val("");
        a("#msgConfirmation").hide();
        a("#msgForm").show();
        a("#aboutModal").modal("show")
    });
    a("#sendMsgBtn").click(function () {
        a("#msgForm").hide();
        a("#msgConfirmation").show();
        sendMsg()
    });
    a("#load_url_btn").click(function () {
        a("#inputURLModal").modal("show")
    });
    a("#exec_loadBtn").click(function () {
        loadfromURL(a("#urlInput").val())
    })
});

function sendMsg() {
    $.ajax({
        type: "GET",
        url: "http://json2table-env-ayji8pibkt.elasticbeanstalk.com/save_msg",
        data: {
            callback: "call",
            msg: $("#leaveMsg").val()
        },
        contentType: "application/json",
        dataType: "jsonp",
        success: function (a) { },
        error: function (a) { }
    })
}
var g;

function loadfromURL(a) {
    $("#json_vl").val("Loading...");
    $("#inner_tree").html("");
    $("#inner_tbl").html("");
    "http" != a.substr(0, 4) && (a = "http://" + a);
    $.ajax({
        type: "GET",
        url: "http://json2table-env-ayji8pibkt.elasticbeanstalk.com/getjson",
        data: {
            callback: "call",
            url: encodeURIComponent(a)
        },
        contentType: "application/json",
        dataType: "jsonp",
        success: function (a) {
            $("#json_vl").val(JSON.stringify(a, void 0, 2));
            processJson()
        },
        error: function (e) {
            $("#json_vl").val("");
            $("#error_msg").text("Not a valid JSON from " + a);
            $("#errorModal").modal("show");
            return {}
        }
    })
}

function call(a) {
    $("#json_vl").val(JSON.stringify(a, void 0, 2));
    processJson()
}

function processJson() {
    $("#inner_tbl").html(buildTable(getJsonVar()));
    showTree()
}

function getJsonVar() {
    try {
        var a = $.parseJSON($("#json_vl").val());
        $("#json_vl").val(JSON.stringify(a, void 0, 2));
        return a
    } catch (e) {
        return $("#error_msg").text(e.message), $("#errorModal").modal("show"), {}
    }
}

function showTree() {
    var a = document.createElement("ol"),
        e = document.createElement("li"),
        d = "_" + Math.random().toString(36).substr(2, 9);
    e.innerHTML = "<label for='" + d + "' class='lbl_obj'>&nbsp;</label> <input type='checkbox' checked id='" + d + "' />";
    d = document.createElement("ol");
    e.appendChild(d);
    a.appendChild(e);
    buildTree(getJsonVar(), 0, d);
    $("#inner_tree").html(a)
}

function buildTable(a) {
    var tableElement = document.createElement("table");
    var d, b;
    if (isArray(a)) return buildArray(a);
    for (var c in a) "object" != typeof a[c] || isArray(a[c]) ? "object" == typeof a[c] && isArray(a[c]) ? (d = tableElement.insertRow(-1), b = d.insertCell(-1), b.colSpan = 2, b.innerHTML = '<div class="td_head">' + encodeText(c) + '</div><table style="width:100%">' + $(buildArray(a[c]), !1).html() + "</table>") : (d = tableElement.insertRow(-1), b = d.insertCell(-1), b.innerHTML = "<div class='td_head'>" + encodeText(c) + "</div>", d = d.insertCell(-1), d.innerHTML = "<div class='td_row_even'>" +
        encodeText(a[c]) + "</div>") : (d = tableElement.insertRow(-1), b = d.insertCell(-1), b.colSpan = 2, b.innerHTML = '<div class="td_head">' + encodeText(c) + '</div><table style="width:100%">' + $(buildTable(a[c]), !1).html() + "</table>");
    return tableElement
}

function buildArray(anArray) {
    var tableElement = document.createElement("table");
    var row, cell, c = !1,
        p = !1,
        m = {},
        h = -1,
        n = 0,
        l;
    l = "";
    //Check length of the array
    if (0 == anArray.length) return "<div></div>";
    row = tableElement.insertRow(-1);
    // Else if array length is more than 0
    for (var arrayItem = 0; arrayItem < anArray.length; arrayItem++)
        if ("object" != typeof anArray[arrayItem] || isArray(anArray[arrayItem])) {
            if ("object" == typeof anArray[arrayItem] && isArray(anArray[arrayItem])) {
                ((cell = row.insertCell(h), cell.colSpan = 2, cell.innerHTML = '<div class="td_head"></div><table style="width:100%">' + $(buildArray(anArray[arrayItem]), !1).html() + "</table>", c = !0))
            } else {
                (p || (h += 1, p = !0, cell = row.insertCell(h), m.empty = h, cell.innerHTML = "<div class='td_head'>&nbsp;</div>"));
            }
        } else
            for (var k in anArray[arrayItem]) l =
                "-" + k, l in m || (c = !0, h += 1, cell = row.insertCell(h), m[l] = h, cell.innerHTML = "<div class='td_head'>" + encodeText(k) + "</div>");
    c || tableElement.deleteRow(0);
    n = h + 1;
    for (arrayItem = 0; arrayItem < anArray.length; arrayItem++)
        if (row = tableElement.insertRow(-1), td_class = isEven(arrayItem) ? "td_row_even" : "td_row_odd", "object" != typeof anArray[arrayItem] || isArray(anArray[arrayItem]))
            if ("object" == typeof anArray[arrayItem] && isArray(anArray[arrayItem]))
                for (h = m.empty, c = 0; c < n; c++) cell = row.insertCell(c), cell.className = td_class, l = c == h ? '<table style="width:100%">' + $(buildArray(anArray[arrayItem]), !1).html() + "</table>" : " ", cell.innerHTML = "<div class='" + td_class + "'>" + encodeText(l) +
                    "</div>";
            else
                for (h = m.empty, c = 0; c < n; c++) cell = row.insertCell(c), l = c == h ? anArray[arrayItem] : " ", cell.className = td_class, cell.innerHTML = "<div class='" + td_class + "'>" + encodeText(l) + "</div>";
        else {
            for (c = 0; c < n; c++) cell = row.insertCell(c), cell.className = td_class, cell.innerHTML = "<div class='" + td_class + "'>&nbsp;</div>";
            for (k in anArray[arrayItem]) c = anArray[arrayItem], l = "-" + k, h = m[l], cell = row.cells[h], cell.className = td_class, "object" != typeof c[k] || isArray(c[k]) ? "object" == typeof c[k] && isArray(c[k]) ? cell.innerHTML = '<table style="width:100%">' + $(buildArray(c[k]), !1).html() + "</table>" : cell.innerHTML =
                "<div class='" + td_class + "'>" + encodeText(c[k]) + "</div>" : cell.innerHTML = '<table style="width:100%">' + $(buildTable(c[k]), !1).html() + "</table>"
        }
    return tableElement
}

function encodeText(a) {
    return $("<div />").text(a).html()
}

// Check if "mayBeArray" is an array type
function isArray(mayBeArray) {
    console.log('Found an Array: ', mayBeArray);
    return "[object Array]" === Object.prototype.toString.call(a)
}

function isEven(a) {
    return 0 == a % 2
}

function buildTree(a, e, d) {
    e += 1;
    if ("undefined" === typeof a) log("undef!!", e);
    else
        for (var b in a)
            if ("object" == typeof a[b]) {
                var c = addTree(b, d, isArray(a[b]));
                buildTree(a[b], e, c)
            } else addLeaf(b, a, d)
}

function addTree(a, e, d) {
    var b = "lbl_obj";
    d && (b = "lbl_array");
    var c = "_" + Math.random().toString(36).substr(2, 9);
    d = document.createElement("li");
    d.innerHTML = "<label for='" + c + "' class='" + b + "'>" + encodeText(a) + "</label> <input type='checkbox' checked id='" + c + "' />";
    a = document.createElement("ol");
    d.appendChild(a);
    null != e && e.appendChild(d);
    return a
}

function addLeaf(a, e, d) {
    var b = "";
    isArray(e) || (b = a + ":");
    b += e[a];
    Math.random().toString(36).substr(2, 9);
    a = document.createElement("li");
    a.className = "file";
    a.innerHTML = "<a>" + encodeText(b) + "</a>";
    d.appendChild(a)
}

function log(a, e, d) {
    console.log(a)
};