// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var cs_vein_Breakthrough_request = (function () {
        function cs_vein_Breakthrough_request() {
        }
        return cs_vein_Breakthrough_request;
    }());
    Sproto.cs_vein_Breakthrough_request = cs_vein_Breakthrough_request;
    __reflect(cs_vein_Breakthrough_request.prototype, "Sproto.cs_vein_Breakthrough_request");
    function _decode_cs_vein_Breakthrough_request(d) {
        var o = new cs_vein_Breakthrough_request;
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
    function _encode_cs_vein_Breakthrough_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 0);
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["cs_vein_Breakthrough_request"] = { en: _encode_cs_vein_Breakthrough_request, de: _decode_cs_vein_Breakthrough_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=vein_c2s.js.map