mixins.math={created:function(){this.renderers.push(this.math)},methods:{math:function(){renderMathInElement(document.body,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}]})}}};