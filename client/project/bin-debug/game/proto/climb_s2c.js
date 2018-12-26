// Generated by sprotodump. DO NOT EDIT!
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Sproto;
(function (Sproto) {
    var climb_mon = (function () {
        function climb_mon() {
        }
        return climb_mon;
    }());
    Sproto.climb_mon = climb_mon;
    __reflect(climb_mon.prototype, "Sproto.climb_mon");
    function _decode_climb_mon(d) {
        var o = new climb_mon;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.id = d.ri();
                    break;
                case 1:
                    o.x = d.ri();
                    break;
                case 2:
                    o.y = d.ri();
                    break;
                case 3:
                    o.monsterid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_climb_mon(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.id != undefined) {
            se.wi(self.id, 0);
        }
        if (self.x != undefined) {
            se.wi(self.x, 1);
        }
        if (self.y != undefined) {
            se.wi(self.y, 2);
        }
        if (self.monsterid != undefined) {
            se.wi(self.monsterid, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["climb_mon"] = { en: _encode_climb_mon, de: _decode_climb_mon };
    var climb_rank_data = (function () {
        function climb_rank_data() {
        }
        return climb_rank_data;
    }());
    Sproto.climb_rank_data = climb_rank_data;
    __reflect(climb_rank_data.prototype, "Sproto.climb_rank_data");
    function _decode_climb_rank_data(d) {
        var o = new climb_rank_data;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.dbid = d.ri();
                    break;
                case 1:
                    o.rank = d.ri();
                    break;
                case 2:
                    o.serverid = d.ri();
                    break;
                case 3:
                    o.name = d.rs();
                    break;
                case 4:
                    o.score = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_climb_rank_data(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 5);
        if (self.dbid != undefined) {
            se.wi(self.dbid, 0);
        }
        if (self.rank != undefined) {
            se.wi(self.rank, 1);
        }
        if (self.serverid != undefined) {
            se.wi(self.serverid, 2);
        }
        if (self.name != undefined) {
            se.ws(self.name, 3);
        }
        if (self.score != undefined) {
            se.wi(self.score, 4);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["climb_rank_data"] = { en: _encode_climb_rank_data, de: _decode_climb_rank_data };
    var climb_report_sharedata = (function () {
        function climb_report_sharedata() {
        }
        return climb_report_sharedata;
    }());
    Sproto.climb_report_sharedata = climb_report_sharedata;
    __reflect(climb_report_sharedata.prototype, "Sproto.climb_report_sharedata");
    function _decode_climb_report_sharedata(d) {
        var o = new climb_report_sharedata;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.shows = d.ro("climb_shows");
                    break;
                case 1:
                    o.serverid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_climb_report_sharedata(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.shows != undefined) {
            se.wo("climb_shows", self.shows, 0);
        }
        if (self.serverid != undefined) {
            se.wi(self.serverid, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["climb_report_sharedata"] = { en: _encode_climb_report_sharedata, de: _decode_climb_report_sharedata };
    var climb_shows = (function () {
        function climb_shows() {
        }
        return climb_shows;
    }());
    Sproto.climb_shows = climb_shows;
    __reflect(climb_shows.prototype, "Sproto.climb_shows");
    function _decode_climb_shows(d) {
        var o = new climb_shows;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.shows = d.ria();
                    break;
                case 1:
                    o.job = d.ri();
                    break;
                case 2:
                    o.sex = d.ri();
                    break;
                case 3:
                    o.id = d.ri();
                    break;
                case 4:
                    o.name = d.rs();
                    break;
                case 5:
                    o.serverid = d.ri();
                    break;
                case 6:
                    o.guildid = d.ri();
                    break;
                case 7:
                    o.guildname = d.rs();
                    break;
                case 8:
                    o.level = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_climb_shows(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 9);
        if (self.shows != undefined) {
            se.wia(self.shows, 0);
        }
        if (self.job != undefined) {
            se.wi(self.job, 1);
        }
        if (self.sex != undefined) {
            se.wi(self.sex, 2);
        }
        if (self.id != undefined) {
            se.wi(self.id, 3);
        }
        if (self.name != undefined) {
            se.ws(self.name, 4);
        }
        if (self.serverid != undefined) {
            se.wi(self.serverid, 5);
        }
        if (self.guildid != undefined) {
            se.wi(self.guildid, 6);
        }
        if (self.guildname != undefined) {
            se.ws(self.guildname, 7);
        }
        if (self.level != undefined) {
            se.wi(self.level, 8);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["climb_shows"] = { en: _encode_climb_shows, de: _decode_climb_shows };
    var sc_climb_all_rank_request = (function () {
        function sc_climb_all_rank_request() {
        }
        return sc_climb_all_rank_request;
    }());
    Sproto.sc_climb_all_rank_request = sc_climb_all_rank_request;
    __reflect(sc_climb_all_rank_request.prototype, "Sproto.sc_climb_all_rank_request");
    function _decode_sc_climb_all_rank_request(d) {
        var o = new sc_climb_all_rank_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ranklist = d.roa("climb_rank_data");
                    break;
                case 1:
                    o.job = d.ri();
                    break;
                case 2:
                    o.sex = d.ri();
                    break;
                case 3:
                    o.shows = d.ria();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_all_rank_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 4);
        if (self.ranklist != undefined) {
            se.woa("climb_rank_data", self.ranklist, 0);
        }
        if (self.job != undefined) {
            se.wi(self.job, 1);
        }
        if (self.sex != undefined) {
            se.wi(self.sex, 2);
        }
        if (self.shows != undefined) {
            se.wia(self.shows, 3);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_all_rank_request"] = { en: _encode_sc_climb_all_rank_request, de: _decode_sc_climb_all_rank_request };
    var sc_climb_curr_rank_request = (function () {
        function sc_climb_curr_rank_request() {
        }
        return sc_climb_curr_rank_request;
    }());
    Sproto.sc_climb_curr_rank_request = sc_climb_curr_rank_request;
    __reflect(sc_climb_curr_rank_request.prototype, "Sproto.sc_climb_curr_rank_request");
    function _decode_sc_climb_curr_rank_request(d) {
        var o = new sc_climb_curr_rank_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.ranklist = d.roa("climb_rank_data");
                    break;
                case 1:
                    o.king = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_curr_rank_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.ranklist != undefined) {
            se.woa("climb_rank_data", self.ranklist, 0);
        }
        if (self.king != undefined) {
            se.wi(self.king, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_curr_rank_request"] = { en: _encode_sc_climb_curr_rank_request, de: _decode_sc_climb_curr_rank_request };
    var sc_climb_fighting_change_request = (function () {
        function sc_climb_fighting_change_request() {
        }
        return sc_climb_fighting_change_request;
    }());
    Sproto.sc_climb_fighting_change_request = sc_climb_fighting_change_request;
    __reflect(sc_climb_fighting_change_request.prototype, "Sproto.sc_climb_fighting_change_request");
    function _decode_sc_climb_fighting_change_request(d) {
        var o = new sc_climb_fighting_change_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.dbid = d.ri();
                    break;
                case 1:
                    o.isfighting = d.rb();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_fighting_change_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.dbid != undefined) {
            se.wi(self.dbid, 0);
        }
        if (self.isfighting != undefined) {
            se.wb(self.isfighting, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_fighting_change_request"] = { en: _encode_sc_climb_fighting_change_request, de: _decode_sc_climb_fighting_change_request };
    var sc_climb_info_request = (function () {
        function sc_climb_info_request() {
        }
        return sc_climb_info_request;
    }());
    Sproto.sc_climb_info_request = sc_climb_info_request;
    __reflect(sc_climb_info_request.prototype, "Sproto.sc_climb_info_request");
    function _decode_sc_climb_info_request(d) {
        var o = new sc_climb_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.score = d.ri();
                    break;
                case 1:
                    o.rewardsocre = d.ri();
                    break;
                case 2:
                    o.fighting = d.ria();
                    break;
                case 3:
                    o.monsters = d.roa("climb_mon");
                    break;
                case 4:
                    o.king = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 5);
        if (self.score != undefined) {
            se.wi(self.score, 0);
        }
        if (self.rewardsocre != undefined) {
            se.wi(self.rewardsocre, 1);
        }
        if (self.fighting != undefined) {
            se.wia(self.fighting, 2);
        }
        if (self.monsters != undefined) {
            se.woa("climb_mon", self.monsters, 3);
        }
        if (self.king != undefined) {
            se.wi(self.king, 4);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_info_request"] = { en: _encode_sc_climb_info_request, de: _decode_sc_climb_info_request };
    var sc_climb_king_request = (function () {
        function sc_climb_king_request() {
        }
        return sc_climb_king_request;
    }());
    Sproto.sc_climb_king_request = sc_climb_king_request;
    __reflect(sc_climb_king_request.prototype, "Sproto.sc_climb_king_request");
    function _decode_sc_climb_king_request(d) {
        var o = new sc_climb_king_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.dbid = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_king_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 1);
        if (self.dbid != undefined) {
            se.wi(self.dbid, 0);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_king_request"] = { en: _encode_sc_climb_king_request, de: _decode_sc_climb_king_request };
    var sc_climb_refresh_mon_request = (function () {
        function sc_climb_refresh_mon_request() {
        }
        return sc_climb_refresh_mon_request;
    }());
    Sproto.sc_climb_refresh_mon_request = sc_climb_refresh_mon_request;
    __reflect(sc_climb_refresh_mon_request.prototype, "Sproto.sc_climb_refresh_mon_request");
    function _decode_sc_climb_refresh_mon_request(d) {
        var o = new sc_climb_refresh_mon_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.monsters = d.roa("climb_mon");
                    break;
                case 1:
                    o.flag = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_refresh_mon_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.monsters != undefined) {
            se.woa("climb_mon", self.monsters, 0);
        }
        if (self.flag != undefined) {
            se.wi(self.flag, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_refresh_mon_request"] = { en: _encode_sc_climb_refresh_mon_request, de: _decode_sc_climb_refresh_mon_request };
    var sc_climb_report_request = (function () {
        function sc_climb_report_request() {
        }
        return sc_climb_report_request;
    }());
    Sproto.sc_climb_report_request = sc_climb_report_request;
    __reflect(sc_climb_report_request.prototype, "Sproto.sc_climb_report_request");
    function _decode_sc_climb_report_request(d) {
        var o = new sc_climb_report_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.rewards = d.roa("reward_data");
                    break;
                case 1:
                    o.sharedata = d.ro("climb_report_sharedata");
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_report_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.rewards != undefined) {
            se.woa("reward_data", self.rewards, 0);
        }
        if (self.sharedata != undefined) {
            se.wo("climb_report_sharedata", self.sharedata, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_report_request"] = { en: _encode_sc_climb_report_request, de: _decode_sc_climb_report_request };
    var sc_climb_score_info_request = (function () {
        function sc_climb_score_info_request() {
        }
        return sc_climb_score_info_request;
    }());
    Sproto.sc_climb_score_info_request = sc_climb_score_info_request;
    __reflect(sc_climb_score_info_request.prototype, "Sproto.sc_climb_score_info_request");
    function _decode_sc_climb_score_info_request(d) {
        var o = new sc_climb_score_info_request;
        var t = -1;
        while (-1 != (t = d.rt())) {
            switch (t) {
                case 0:
                    o.score = d.ri();
                    break;
                case 1:
                    o.rewardsocre = d.ri();
                    break;
                default:
                    d.nod();
                    break;
            }
        }
        return o;
    }
    function _encode_sc_climb_score_info_request(self, st) {
        var se = Sproto.SprotoCore.GetSerialize(st, 2);
        if (self.score != undefined) {
            se.wi(self.score, 0);
        }
        if (self.rewardsocre != undefined) {
            se.wi(self.rewardsocre, 1);
        }
        return Sproto.SprotoCore.CloseSerialize(se);
    }
    Sproto.ALL_DICT["sc_climb_score_info_request"] = { en: _encode_sc_climb_score_info_request, de: _decode_sc_climb_score_info_request };
})(Sproto || (Sproto = {}));
//# sourceMappingURL=climb_s2c.js.map