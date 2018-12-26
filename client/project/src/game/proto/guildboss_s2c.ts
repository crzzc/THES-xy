// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class guildboss_boxinfo {
		public id: number; // tag 0
		public x: number; // tag 1
		public y: number; // tag 2
	}

	function _decode_guildboss_boxinfo(d: SprotoTypeDeserialize) {
		let o = new guildboss_boxinfo;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.id = d.ri ();
				break;
			case 1:
				o.x = d.ri ();
				break;
			case 2:
				o.y = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildboss_boxinfo(self: guildboss_boxinfo, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.id != undefined) {
			se.wi (self.id, 0);
		}

		if (self.x != undefined) {
			se.wi (self.x, 1);
		}

		if (self.y != undefined) {
			se.wi (self.y, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildboss_boxinfo"] = {en: _encode_guildboss_boxinfo, de: _decode_guildboss_boxinfo}
	export class guildboss_collect_info {
		public playerid: number; // tag 0
		public boxid: number; // tag 1
		public time: number; // tag 2
	}

	function _decode_guildboss_collect_info(d: SprotoTypeDeserialize) {
		let o = new guildboss_collect_info;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerid = d.ri ();
				break;
			case 1:
				o.boxid = d.ri ();
				break;
			case 2:
				o.time = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildboss_collect_info(self: guildboss_collect_info, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.playerid != undefined) {
			se.wi (self.playerid, 0);
		}

		if (self.boxid != undefined) {
			se.wi (self.boxid, 1);
		}

		if (self.time != undefined) {
			se.wi (self.time, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildboss_collect_info"] = {en: _encode_guildboss_collect_info, de: _decode_guildboss_collect_info}
	export class guildboss_firstinfo {
		public name: string; // tag 0
		public serverid: number; // tag 1
		public guildid: number; // tag 2
		public guildname: string; // tag 3
		public damage: number; // tag 4
	}

	function _decode_guildboss_firstinfo(d: SprotoTypeDeserialize) {
		let o = new guildboss_firstinfo;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.serverid = d.ri ();
				break;
			case 2:
				o.guildid = d.ri ();
				break;
			case 3:
				o.guildname = d.rs ();
				break;
			case 4:
				o.damage = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildboss_firstinfo(self: guildboss_firstinfo, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 1);
		}

		if (self.guildid != undefined) {
			se.wi (self.guildid, 2);
		}

		if (self.guildname != undefined) {
			se.ws (self.guildname, 3);
		}

		if (self.damage != undefined) {
			se.wi (self.damage, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildboss_firstinfo"] = {en: _encode_guildboss_firstinfo, de: _decode_guildboss_firstinfo}
	export class guildboss_rank {
		public name: string; // tag 0
		public serverid: number; // tag 1
		public damage: number; // tag 2
		public job: number; // tag 3
		public sex: number; // tag 4
	}

	function _decode_guildboss_rank(d: SprotoTypeDeserialize) {
		let o = new guildboss_rank;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.name = d.rs ();
				break;
			case 1:
				o.serverid = d.ri ();
				break;
			case 2:
				o.damage = d.ri ();
				break;
			case 3:
				o.job = d.ri ();
				break;
			case 4:
				o.sex = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_guildboss_rank(self: guildboss_rank, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 5);

		if (self.name != undefined) {
			se.ws (self.name, 0);
		}

		if (self.serverid != undefined) {
			se.wi (self.serverid, 1);
		}

		if (self.damage != undefined) {
			se.wi (self.damage, 2);
		}

		if (self.job != undefined) {
			se.wi (self.job, 3);
		}

		if (self.sex != undefined) {
			se.wi (self.sex, 4);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["guildboss_rank"] = {en: _encode_guildboss_rank, de: _decode_guildboss_rank}
	export class sc_guildboss_box_all_request {
		public boxinfos: guildboss_boxinfo[]; // tag 0
	}

	function _decode_sc_guildboss_box_all_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_box_all_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.boxinfos = d.roa("guildboss_boxinfo");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_box_all_request(self: sc_guildboss_box_all_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.boxinfos != undefined) {
			se.woa ("guildboss_boxinfo", self.boxinfos, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_box_all_request"] = {en: _encode_sc_guildboss_box_all_request, de: _decode_sc_guildboss_box_all_request}
	export class sc_guildboss_box_one_request {
		public boxinfo: guildboss_boxinfo; // tag 0
	}

	function _decode_sc_guildboss_box_one_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_box_one_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.boxinfo = d.ro("guildboss_boxinfo");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_box_one_request(self: sc_guildboss_box_one_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.boxinfo != undefined) {
			se.wo ("guildboss_boxinfo", self.boxinfo, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_box_one_request"] = {en: _encode_sc_guildboss_box_one_request, de: _decode_sc_guildboss_box_one_request}
	export class sc_guildboss_collect_all_request {
		public infos: guildboss_collect_info[]; // tag 0
	}

	function _decode_sc_guildboss_collect_all_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_collect_all_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.infos = d.roa("guildboss_collect_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_collect_all_request(self: sc_guildboss_collect_all_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.infos != undefined) {
			se.woa ("guildboss_collect_info", self.infos, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_collect_all_request"] = {en: _encode_sc_guildboss_collect_all_request, de: _decode_sc_guildboss_collect_all_request}
	export class sc_guildboss_collect_now_request {
		public info: guildboss_collect_info; // tag 0
	}

	function _decode_sc_guildboss_collect_now_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_collect_now_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.info = d.ro("guildboss_collect_info");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_collect_now_request(self: sc_guildboss_collect_now_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 1);

		if (self.info != undefined) {
			se.wo ("guildboss_collect_info", self.info, 0);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_collect_now_request"] = {en: _encode_sc_guildboss_collect_now_request, de: _decode_sc_guildboss_collect_now_request}
	export class sc_guildboss_info_request {
		public status: number; // tag 0
		public changetime: number; // tag 1
	}

	function _decode_sc_guildboss_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.status = d.ri ();
				break;
			case 1:
				o.changetime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_info_request(self: sc_guildboss_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.status != undefined) {
			se.wi (self.status, 0);
		}

		if (self.changetime != undefined) {
			se.wi (self.changetime, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_info_request"] = {en: _encode_sc_guildboss_info_request, de: _decode_sc_guildboss_info_request}
	export class sc_guildboss_player_dead_request {
		public deadtime: number; // tag 1
	}

	function _decode_sc_guildboss_player_dead_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_player_dead_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 1:
				o.deadtime = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_player_dead_request(self: sc_guildboss_player_dead_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.deadtime != undefined) {
			se.wi (self.deadtime, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_player_dead_request"] = {en: _encode_sc_guildboss_player_dead_request, de: _decode_sc_guildboss_player_dead_request}
	export class sc_guildboss_rank_last_request {
		public firstinfo: guildboss_firstinfo; // tag 0
		public playerranks: guildboss_rank[]; // tag 1
		public mydamage: number; // tag 2
		public myrank: number; // tag 3
	}

	function _decode_sc_guildboss_rank_last_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_rank_last_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.firstinfo = d.ro("guildboss_firstinfo");
				break;
			case 1:
				o.playerranks = d.roa("guildboss_rank");
				break;
			case 2:
				o.mydamage = d.ri ();
				break;
			case 3:
				o.myrank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_rank_last_request(self: sc_guildboss_rank_last_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 4);

		if (self.firstinfo != undefined) {
			se.wo ("guildboss_firstinfo", self.firstinfo, 0);
		}

		if (self.playerranks != undefined) {
			se.woa ("guildboss_rank", self.playerranks, 1);
		}

		if (self.mydamage != undefined) {
			se.wi (self.mydamage, 2);
		}

		if (self.myrank != undefined) {
			se.wi (self.myrank, 3);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_rank_last_request"] = {en: _encode_sc_guildboss_rank_last_request, de: _decode_sc_guildboss_rank_last_request}
	export class sc_guildboss_rank_now_request {
		public playerranks: guildboss_rank[]; // tag 0
		public mydamage: number; // tag 1
		public myrank: number; // tag 2
	}

	function _decode_sc_guildboss_rank_now_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_rank_now_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.playerranks = d.roa("guildboss_rank");
				break;
			case 1:
				o.mydamage = d.ri ();
				break;
			case 2:
				o.myrank = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_rank_now_request(self: sc_guildboss_rank_now_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.playerranks != undefined) {
			se.woa ("guildboss_rank", self.playerranks, 0);
		}

		if (self.mydamage != undefined) {
			se.wi (self.mydamage, 1);
		}

		if (self.myrank != undefined) {
			se.wi (self.myrank, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_rank_now_request"] = {en: _encode_sc_guildboss_rank_now_request, de: _decode_sc_guildboss_rank_now_request}
	export class sc_guildboss_rewards_request {
		public result: number; // tag 0
		public rewards: reward_data[]; // tag 1
	}

	function _decode_sc_guildboss_rewards_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_rewards_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.result = d.ri ();
				break;
			case 1:
				o.rewards = d.roa("reward_data");
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_rewards_request(self: sc_guildboss_rewards_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 2);

		if (self.result != undefined) {
			se.wi (self.result, 0);
		}

		if (self.rewards != undefined) {
			se.woa ("reward_data", self.rewards, 1);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_rewards_request"] = {en: _encode_sc_guildboss_rewards_request, de: _decode_sc_guildboss_rewards_request}
	export class sc_guildboss_update_info_request {
		public shieldvalue: number; // tag 0
		public hp: number; // tag 1
		public hpperc: number; // tag 2
	}

	function _decode_sc_guildboss_update_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_guildboss_update_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.shieldvalue = d.ri ();
				break;
			case 1:
				o.hp = d.ri ();
				break;
			case 2:
				o.hpperc = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_guildboss_update_info_request(self: sc_guildboss_update_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 3);

		if (self.shieldvalue != undefined) {
			se.wi (self.shieldvalue, 0);
		}

		if (self.hp != undefined) {
			se.wi (self.hp, 1);
		}

		if (self.hpperc != undefined) {
			se.wi (self.hpperc, 2);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_guildboss_update_info_request"] = {en: _encode_sc_guildboss_update_info_request, de: _decode_sc_guildboss_update_info_request}
}
