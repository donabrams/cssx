define(["./elemental"], function(Elemental){
	return Elemental(function(rule){
		var layout = rule.children;
		return function(domNode){
			if(rule.content){
				domNode.innerHTML = eval(content);
			}
			for(var i = 0; i < layout.length; i++){
				var rule = layout[i];
				var selector = rule.selector;
				var target = document.createElement("div");
				// create the appropriate additions to the elements based on the selectors
				selector.replace(/\.([\w-]+)/, function(t, className){
					target.className = className;
				});
				selector.replace(/#([\w-]+)/, function(t, id){
					target.id = id;
				});
				rule.apply(target);
				domNode.appendChild(target);
			}
		}
	}).extend({
		content: function(content, rule){
			rule.content = content;
		},
		role: "layout"
	});
});