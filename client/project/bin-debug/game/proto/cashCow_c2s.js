// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_cashCow_box_rewards_request = (function () {
        function cs_cashCow_box_rewards_request() {
        }
        return cs_cashCow_box_rewards_request;
    }());
    Sproto.cs_cashCow_box_rewards_request = cs_cashCow_box_rewards_request;
    __reflect(cs_cashCow_box_rewards_request.prototype, "Sproto.cs_cashCow_box_rewards_request");
    function _decode_cs_cashCow_box_rewards_request(d) {
        var o = new cs_cashCow_box_rewards_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.boxid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_cashCow_box_rewards_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.boxid != undefined) {
            se.wi(self.boxid, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_cashCow_box_rewards_request"] = { en: _encode_cs_cashCow_box_rewards_request, de: _decode_cs_cashCow_box_rewards_request };
    var cs_cashCow_shake_request = (function () {
        function cs_cashCow_shake_request() {
        }
        return cs_cashCow_shake_request;
    }());
    Sproto.cs_cashCow_shake_request = cs_cashCow_shake_request;
    __reflect(cs_cashCow_shake_request.prototype, "Sproto.cs_cashCow_shake_request");
    function _decode_cs_cashCow_shake_request(d) {
        var o = new cs_cashCow_shake_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_cs_cashCow_shake_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_cashCow_shake_request"] = { en: _encode_cs_cashCow_shake_request, de: _decode_cs_cashCow_shake_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=cashCow_c2s.js.map