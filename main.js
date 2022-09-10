const main = document.getElementById("container");
var header = 
`
<header>
    <div class="logoBox">
        <h1 class="logo"><span>I</span>Watch</h1>
    </div>
    <div class="nav">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Series</a></li>
            <li><a href="">Other</a></li>
        </ul>
    </div>
</header>
`;
var markup = 
`
${header}
`;
main.innerHTML = markup;