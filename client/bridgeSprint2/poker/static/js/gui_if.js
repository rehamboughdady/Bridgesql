"use strict";

//  --- Not in the interface ---

function internal_get_a_class_named (curr, searched_name) {
  if (!curr) {
    gui_log_to_history("internal_get_a_class_named, no curr for " + searched_name);
  }
  var notes = null;
  for (var i = 0; i < curr.childNodes.length; i++) {
    if (curr.childNodes[i].className == searched_name) {
      notes = curr.childNodes[i];
      break;
    }
  }
  return notes;
}

function internal_FixTheRanking (rank) {
  if (rank == 14) {
    rank = 'ace';
  } else if (rank == 13) {
    rank = 'king';
  } else if (rank == 12) {
    rank = 'queen';
  } else if (rank == 11) {
    rank = 'jack';
  }
  return rank;
}

function internal_FixTheSuiting (suit) {
  if (suit == 'c') {
    suit = 'clubs';
  } else if (suit == 'd') {
    suit = 'diamonds';
  } else if (suit == 'h') {
    suit = 'hearts';
  } else if (suit == 's') {
    suit = 'spades';
  } else {
    alert('Unknown suit ' + suit);
  }

  return suit;
}

function internal_GetCardImageUrl (card) {
  var suit = card.substring(0, 1);
  var rank = card.substring(1);
  rank = internal_FixTheRanking(rank); // 14 -> 'ace' etc
  suit = internal_FixTheSuiting(suit); // c  -> 'clubs' etc

  return "url('static/images/" + rank + '_of_' + suit + ".png')";
}

function internal_setBackground (diva, image) {
  var komage = diva.style;
  komage['background-image'] = image;
}

function internal_setCard (diva, card) {
  // card may be "" -> do not show card
  //             "blinded" -> show back
  //             "s14" -> show ace of spades
  var image;
  if (typeof card == 'undefined' || card == "") {
    image = "url('static/images/outline.gif')";
  } else if (card == "blinded") {
    image = "url('static/images/cardback.png')";
  } else {
    image = internal_GetCardImageUrl(card);
  }

  internal_setBackground(diva, image);
}

function internal_clickin_helper (button, button_text, func_on_click) {
  if (button_text == 0) {
    button.style.visibility = 'hidden';
  } else {
    button.style.visibility = 'visible';
    button.innerHTML = button_text;
    button.onclick = func_on_click;
  }
}

//  --- here is the GUI stuff ---

function gui_hide_poker_table () {
  var table = document.getElementById('poker_table');
  table.style.visibility = 'hidden';
}

function gui_show_poker_table () {
  var table = document.getElementById('poker_table');
  table.style.visibility = 'visible';
}

function gui_set_player_name (name, seat) {
  var table = document.getElementById('poker_table');
  var current = 'seat' + seat;
  var seatloc = table.children[current];
  var chipsdiv = internal_get_a_class_named(seatloc, 'name-chips');
  var namediv = internal_get_a_class_named(chipsdiv, 'player-name');
  if (name == "") {
    seatloc.style.visibility = 'hidden';
  } else {
    seatloc.style.visibility = 'visible';
  }
  namediv.textContent = name;
}

function gui_hilite_player (hilite_color, name_color, seat) {
  var table = document.getElementById('poker_table');
  var current = 'seat' + seat;
  var seatloc = table.children[current];
  var chipsdiv = internal_get_a_class_named(seatloc, 'name-chips');
  //  var chipsdiv = seatloc.getElementById('name-chips');
  var namediv = internal_get_a_class_named(chipsdiv, 'player-name');
  if (name_color == "") {
    namediv.style.color = chipsdiv.style.color;
  } else {
    namediv.style.color = name_color;
  }
  if (hilite_color == "") {
    namediv.style.backgroundColor = chipsdiv.style.backgroundColor;
  } else {
    namediv.style.backgroundColor = hilite_color;
  }
}

function gui_set_bankroll (amount, seat) {
  var table = document.getElementById('poker_table');
  var current = 'seat' + seat;
  var seatloc = table.children[current];
  var chipsdiv = internal_get_a_class_named(seatloc, 'name-chips');
  //  var chipsdiv = seatloc.getElementById('name-chips');
  var namediv = internal_get_a_class_named(chipsdiv, 'chips');
  if (!isNaN(amount) && amount != "") {
    amount = "$" + amount;
  }
  namediv.textContent = amount;
}

function gui_set_bet (bet, seat) {
  var table = document.getElementById('poker_table');
  var current = 'seat' + seat;
  var seatloc = table.children[current];
  var betdiv = internal_get_a_class_named(seatloc, 'bet');

  betdiv.textContent = bet;
}

function gui_set_player_cards (card_a, card_b, seat) {
  var table = document.getElementById('poker_table');
  var current = 'seat' + seat;
  var seatloc = table.children[current];
  var cardsdiv = internal_get_a_class_named(seatloc, 'holecards');
  var card1 = internal_get_a_class_named(cardsdiv, 'card holecard1');
  var card2 = internal_get_a_class_named(cardsdiv, 'card holecard2');

  internal_setCard(card1, card_a);
  internal_setCard(card2, card_b);
}

function gui_lay_board_card (n, the_card) {
  // Write the card no 'n'
  // the_card = "c9";

  var current = '';

  if (n == 0) {
    current = 'flop1';
  } else if (n == 1) {
    current = 'flop2';
  } else if (n == 2) {
    current = 'flop3';
  } else if (n == 3) {
    current = 'turn';
  } else if (n == 4) {
    current = 'river';
  }

  var table = document.getElementById('poker_table');
  var seatloc = table.children.board;

  var cardsdiv = seatloc.children[current];
  internal_setCard(cardsdiv, the_card);
}

function gui_write_basic_general (pot_size) {
  var table = document.getElementById('poker_table');
  var pot_div = table.children.pot;
  var total_div = pot_div.children['total-pot'];

  var the_pot = 'Total pot: ' + pot_size;
  total_div.innerHTML = the_pot;
}

function gui_write_basic_general_text (text) {
  var table = document.getElementById('poker_table');
  var pot_div = table.children.pot;
  var total_div = pot_div.children['total-pot'];
  total_div.style.visibility = 'visible';
  total_div.innerHTML = text;
}

var log_text = [];
var log_index = 0;

function gui_log_to_history (text_to_write) {
  for (var idx = log_index; idx > 0; --idx) {
    log_text[idx] = log_text[idx - 1];
  }

  log_text[0] = text_to_write;
  if (log_index < 40) {
    log_index = log_index + 1;
  }
  var text_to_output = '<br><b>' + log_text[0] + '</b>';
  for (idx = 1; idx < log_index; ++idx) {
    text_to_output += '<br>' + log_text[idx];
  }
  var history = document.getElementById('history');
  history.innerHTML = text_to_output;
}

function gui_hide_log_window () {
  var history = document.getElementById('history');
  //  history.style.visibility = 'hidden';
  history.style.display = 'none';
}

function gui_place_dealer_button (seat) {
  var table_seat = seat; // interface start at 1
  var button = document.getElementById('button');
  if (seat < 0) {
    button.style.visibility = 'hidden';
  } else {
    button.style.visibility = 'visible';
  }
  button.className = 'seat' + table_seat + '-button';
}

function gui_hide_dealer_button () {
  gui_place_dealer_button(-3);
}

function gui_hide_fold_call_raise_click () {
  var buttons = document.getElementById('action-options');
  var fold = buttons.children['fold-button'];
  internal_clickin_helper(fold, 0, 0);

  var call = buttons.children['call-button'];
  internal_clickin_helper(call, 0, 0);

  var raise = buttons.children['raise-button'];
  internal_clickin_helper(raise, 0, 0);

  gui_disable_shortcut_keys();
}

function gui_setup_fold_call_raise_click (show_fold, call_text, raise_text,
  fold_func, call_func, raise_func, key_ev) {
  // Here we have a coupling of the funtions 'human_fold', 'human_call' and 'human_raise'
  var buttons = document.getElementById('action-options');
  var fold = buttons.children['fold-button'];
  internal_clickin_helper(fold, show_fold, fold_func);

  var call = buttons.children['call-button'];
  internal_clickin_helper(call, call_text, call_func);

  var raise = buttons.children['raise-button'];
  internal_clickin_helper(raise, raise_text, raise_func);
}

function curry_in_speedfunction (speed_func) {
  var call_back = speed_func;

  var ret_func = function () {
    var buttons = document.getElementById('setup-options');
    var speed = buttons.children['speed-button'];
    var selector = speed.children['speed-selector'];
    var qqq = selector.children['speed-options'];
    var index = qqq.value;
    var value = qqq[index].text;

    call_back(value);
  };
  return ret_func;
}

function gui_set_selected_speed_option (index) {
  var buttons = document.getElementById('setup-options');
  var speed = buttons.children['speed-button'];
  var selector = speed.children['speed-selector'];
  var qqq = selector.children['speed-options'];
  qqq.value = index;
}

function internal_le_button (buttons, button_name, button_func) {
  var le_button = buttons.children[button_name];
  le_button.style.visibility = 'visible';
  le_button.onclick = button_func;
}

function gui_setup_option_buttons (name_func, speed_func, help_func, check_func) {
  var buttons = document.getElementById('setup-options');

  internal_le_button(buttons, 'name-button', name_func);

  var speed = buttons.children['speed-button'];
  speed.style.visibility = 'visible';
  speed.onchange = curry_in_speedfunction(speed_func);

  internal_le_button(buttons, 'help-button', help_func);
  internal_le_button(buttons, 'check-button', check_func);
}

function internal_hide_le_button (buttons, button_name, button_func) {
  var le_button = buttons.children[button_name];
  le_button.style.visibility = 'hidden';
}

function gui_hide_setup_option_buttons (name_func, speed_func, help_func, check_func) {
  var buttons = document.getElementById('setup-options');

  internal_hide_le_button(buttons, 'name-button');
  internal_hide_le_button(buttons, 'speed-button');
  internal_hide_le_button(buttons, 'help-button');
  internal_hide_le_button(buttons, 'check-button');
}

function gui_hide_game_response () {
  var response = document.getElementById('game-response');
  response.style.visibility = 'hidden';
}

function gui_show_game_response () {
  var response = document.getElementById('game-response');
  response.style.visibility = 'visible';
}

function gui_write_game_response (text) {
  var response = document.getElementById('game-response');
  response.innerHTML = text;
}

function gui_write_guick_raise (text) {
  var response = document.getElementById('quick-raises');
  if (text == "") {
    response.style.visibility = 'hidden';
  } else {
    response.style.visibility = 'visible';
    response.innerHTML = text;
  }
}

function gui_hide_guick_raise () {
  gui_write_guick_raise("");
}

function gui_write_modal_box (text) {
  var modal = document.getElementById('modal-box');
  if (text == "") {
    modal.style.display = "none";
  } else {
    modal.innerHTML = text;
    modal.style.display = "block";
  }
}

function gui_initialize_css () {
  // Set all the backgrounds
  var image;
  var item;
  item = document.getElementById('poker_table');
  image = "url('static/images/poker_table.png')";
  internal_setBackground(item, image);
}

function gui_enable_shortcut_keys (func) {
  document.addEventListener ('keydown', func);
}

function gui_disable_shortcut_keys (func) {
  document.removeEventListener ('keydown', func);
}
