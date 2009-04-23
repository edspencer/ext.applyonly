/**
 * Applies only a pre-specified set of properties from one object to another
 * @param {Object} receiver The object to copy the properties to
 * @param {Object} sender The object to copy the properties from
 * @param {Array} whitelist The whitelist of properties to copy (e.g. ['width', 'height'])
 * @return {Object} The receiver object, with any of the whitelisted properties overwritten if they exist in sender
 */
Ext.applyOnly = function(receiver, sender, whitelist) {
  if (receiver && sender) {
    Ext.each(whitelist || [], function(item) {
      if (typeof sender[item] != 'undefined') receiver[item] = sender[item];
    }, this);
  };
  
  return receiver;
};