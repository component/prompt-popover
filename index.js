
/**
 * Module dependencies.
 */

var Popover = require('popover')
  , o = require('jquery');

/**
 * Expose `Prompt`.
 */

module.exports = Prompt;

/**
 * Initialize a `Prompt` the given `title`.
 *
 * @param {Mixed} title
 * @api public
 */

function Prompt(title) {
  this.actions = o(require('./template'));
  Popover.call(this, this.actions);
  this.classname = 'popover prompt-popover';
  this.input = this.actions.find('input');
  this.input.change(this._ok.bind(this));
  this.actions.find('.cancel').click(this.oncancel.bind(this));
  this.actions.find('.ok').click(this.onok.bind(this));
  this.placeholder(title);
}

/**
 * Inherits from `Popover.prototype`.
 */

Prompt.prototype.__proto__ = Popover.prototype;

/**
 * Handle cancel click.
 *
 * Emits "cancel".
 *
 * @param {Event} e
 * @api private
 */

Prompt.prototype.oncancel = function(e){
  e.preventDefault();
  this.emit('cancel');
  this.callback(null);
  this.hide();
};

/**
 * Handle ok click.
 *
 * Emits "ok".
 *
 * @param {Event} e
 * @api private
 */

Prompt.prototype.onok = function(e){
  e.preventDefault();
  this._ok();
};

/**
 * Invoke callback with trimmed input value.
 *
 * @api private
 */

Prompt.prototype._ok = function(){
  if (this.called) return;
  this.called = true;
  this.emit('ok');
  this.callback(this.input.val().trim());
  this.hide();
};

/**
 * Set placeholder `str`.
 *
 * @param {String} str
 * @return {Prompt}
 * @api public
 */

Prompt.prototype.placeholder = function(str){
  this.actions.find('input').attr('placeholder', str);
  return this;
};

/**
 * Change "cancel" button `text`.
 *
 * @param {String} text
 * @return {Prompt}
 * @api public
 */

Prompt.prototype.cancel = function(text){
  this.actions.find('.cancel').text(text);
  return this;
};

/**
 * Change "ok" button `text`.
 *
 * @param {String} text
 * @return {Prompt}
 * @api public
 */

Prompt.prototype.ok = function(text){
  this.actions.find('.ok').text(text);
  return this;
};

/**
 * Show the tip attached to `el` and invoke `fn(ok)`.
 *
 * @param {jQuery|Element} el
 * @param {Function} fn
 * @return {Prompt}
 * @api public
 */

Prompt.prototype.show = function(el, fn){
  Popover.prototype.show.call(this, el);
  this.input.focus();
  this.callback = fn || function(){};
  return this;
};
