// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_effect_skin_activate_request = (function () {
        function cs_effect_skin_activate_request() {
        }
        return cs_effect_skin_activate_request;
    }());
    Sproto.cs_effect_skin_activate_request = cs_effect_skin_activate_request;
    __reflect(cs_effect_skin_activate_request.prototype, "Sproto.cs_effect_skin_activate_request");
    function _decode_cs_effect_skin_activate_request(d) {
        var o = new cs_effect_skin_activate_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_effect_skin_activate_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_effect_skin_activate_request"] = { en: _encode_cs_effect_skin_activate_request, de: _decode_cs_effect_skin_activate_request };
    var cs_effect_skin_change_request = (function () {
        function cs_effect_skin_change_request() {
        }
        return cs_effect_skin_change_request;
    }());
    Sproto.cs_effect_skin_change_request = cs_effect_skin_change_request;
    __reflect(cs_effect_skin_change_request.prototype, "Sproto.cs_effect_skin_change_request");
    function _decode_cs_effect_skin_change_request(d) {
        var o = new cs_effect_skin_change_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_effect_skin_change_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_effect_skin_change_request"] = { en: _encode_cs_effect_skin_change_request, de: _decode_cs_effect_skin_change_request };
    var cs_effect_title_activate_request = (function () {
        function cs_effect_title_activate_request() {
        }
        return cs_effect_title_activate_request;
    }());
    Sproto.cs_effect_title_activate_request = cs_effect_title_activate_request;
    __reflect(cs_effect_title_activate_request.prototype, "Sproto.cs_effect_title_activate_request");
    function _decode_cs_effect_title_activate_request(d) {
        var o = new cs_effect_title_activate_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_effect_title_activate_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_effect_title_activate_request"] = { en: _encode_cs_effect_title_activate_request, de: _decode_cs_effect_title_activate_request };
    var cs_effect_title_change_request = (function () {
        function cs_effect_title_change_request() {
        }
        return cs_effect_title_change_request;
    }());
    Sproto.cs_effect_title_change_request = cs_effect_title_change_request;
    __reflect(cs_effect_title_change_request.prototype, "Sproto.cs_effect_title_change_request");
    function _decode_cs_effect_title_change_request(d) {
        var o = new cs_effect_title_change_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_effect_title_change_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_effect_title_change_request"] = { en: _encode_cs_effect_title_change_request, de: _decode_cs_effect_title_change_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=effectbase_c2s.js.map