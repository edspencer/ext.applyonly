Screw.Unit(function() {
  describe("Ext.applyOnly", function() {
    var sender = {
      height:   200,
      width:    200,
      message:  "A new test",
      closable: true
    };
    
    var whitelist = ['height', 'width', 'toSave'];
    
    it("should update whitelisted properties", function() {
      var res = Ext.applyOnly(receiver(), sender, whitelist);
      
      expect(res.height).to(equal, 200);
      expect(res.width).to(equal, 200);
    });
    
    it("should not update any property which is not in the whitelist", function() {
      var res = Ext.applyOnly(receiver(), sender, whitelist);
      
      expect(res.message).to(equal, "This is a test");
      expect(res.closable).to(equal, false);
    });
    
    it("should not overwrite receiver properties if they are not present in the sender", function() {
      var res = Ext.applyOnly(receiver(), {height: 200, toSave: false}, whitelist);
      
      expect(res.width).to(equal, 100);
      expect(res.toSave).to(equal, false);
    });
    
    /**
     * Creates a new receiver object for each test as applyOnly would otherwise overwrite it each time
     */
    function receiver() {
      return {
        height:   100,
        width:    100,
        message:  "This is a test",
        closable: false
      };
    }
  });
});
