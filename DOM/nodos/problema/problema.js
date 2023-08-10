document.addEventListener("DOMContentLoaded", function () {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const btnCountNodes = document.getElementById("btnCountNodes");
    const btnCountElementNodes = document.getElementById("btnCountElementNodes");

    btnCountNodes.addEventListener("click", () => {
        const div1ChildNodes = div1.childNodes.length;
        const div2ChildNodes = div2.childNodes.length;
        alert(
            `Div 1 tiene ${div1ChildNodes} nodos hijos.\nDiv 2 tiene ${div2ChildNodes} nodos hijos.`
        );
    });

    btnCountElementNodes.addEventListener("click", () => {
        const div1ElementNodes = div1.children.length;
        const div2ElementNodes = div2.children.length;
        alert(
            `Div 1 tiene ${div1ElementNodes} nodos de tipo elemento.\nDiv 2 tiene ${div2ElementNodes} nodos de tipo elemento.`
        );
    });
});
