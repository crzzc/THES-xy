// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var sc_vip_update_data_request = (function () {
        function sc_vip_update_data_request() {
        }
        return sc_vip_update_data_request;
    }());
    Sproto.sc_vip_update_data_request = sc_vip_update_data_request;
    __reflect(sc_vip_update_data_request.prototype, "Sproto.sc_vip_update_data_request");
    function _decode_sc_vip_update_data_request(d) {
        var o = new sc_vip_update_data_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.lv = d.ri();
                    break;
                case 1:
                    o.exp = d.ri();
                    break;
                case 2:
                    o.state = d.ri();
                    break;
                case 3:
                    o.otherreward = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_vip_update_data_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.lv != undefined) {
            se.wi(self.lv, 0);
        }
        if (self.exp != undefined) {
            se.wi(self.exp, 1);
        }
        if (self.state != undefined) {
            se.wi(self.state, 2);
        }
        if (self.otherreward != undefined) {
            se.wi(self.otherreward, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_vip_update_data_request"] = { en: _encode_sc_vip_update_data_request, de: _decode_sc_vip_update_data_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=vip_s2c.js.map