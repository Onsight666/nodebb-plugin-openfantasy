"use strict";

var battle = {};

battle.render = function(req, res, callback) {
	var content = templates.prepare(OF.templates['battle.tpl']);

	if (req.user && req.user.uid) {
		Character.getCharacterField(req.user.uid, 'character_id', function(err, data) {
			if (data) {
				content = content.parse({});

				translator.translate(content, function(content) {
					callback({content: content});
				});
			} else {
				return res.redirect('/rpg/character');
			}
		});
	}
	else
	{
		return res.redirect('/login');
	}
};

battle.getBattleField = function(battle_id, field, callback) {
	db.getObjectField('of:battle:' + battle_id, field, callback);
};

battle.getBattleFields = function(battle_id, fields, callback) {
	db.getObjectFields('of:battle:' + battle_id, fields, callback);
};

battle.setBattleField = function(battle_id, field, value, callback) {
	db.setObjectField('of:battle:' + battle_id, field, value, callback);
};

battle.setBattleFields = function(battle_id, data, callback) {
	db.setObject('of:battle:' + battle_id, data, callback);
};

battle.incrementBattleFieldBy = function(battle_id, field, value, callback) {
	db.incrObjectFieldBy('of:battle:' + battle_id, field, value, callback);
};

battle.decrementBattleFieldBy = function(battle_id, field, value, callback) {
	db.incrObjectFieldBy('of:battle:' + battle_id, field, -value, callback);
};

battle.getCurrentBattleData = function(uid, callback) {

};

function createBattle(uid, callback) {

}

function incrementTurn(uid, callback) {

}

function flee(uid, callback) {

}

function win(uid, challenger_id, callback) {

}

function lose(uid, challenger_id, callback) {

}

function attack(uid, item_id, callback) {

}

function opponent_turn(uid) {

}


module.exports = battle;