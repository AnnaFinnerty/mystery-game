function randomFromArrayAndRemove(arr){
    const r = Math.floor(Math.random()*arr.length);
    const obj = arr[r];
    arr.splice(r,1)
    return obj
}

function randomFromArray(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}

function buildObject(type,container,className,id){
    const obj = document.createElement(type);
          obj.className = className;
          obj.id = id
    container.appendChild(obj)
    return obj
}