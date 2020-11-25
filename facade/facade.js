/* ==========================FACADE=========================== */
/*                       JQuery example                        */

function $(target) {
    return new Query(target);
}

function Query(target) {
    this.target = document.querySelector(target);
}

Query.prototype.html = function(html) {
    if (html) {
        return this.target.innerHTML = html;
    } else {
        return this.target.innerHTML;
    }
}
Query.prototype.text = function() {
    return this.target.textContent;
}
Query.prototype.append = function(node) {
    this.target.appendChild(node);
    return this;
}
Query.prototype.css = function(property, value) {
    this.target.style[property] = value;
    return this;
}

$('#c')
.append(document.createTextNode( "!!!" ))
.css('color', 'green')
.css('font-family', 'arial')
.css('font-weight', 'bold')
.text();