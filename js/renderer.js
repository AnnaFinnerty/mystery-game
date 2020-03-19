class Renderer{
    constructor(game){
        this.game = game;
        this.locationContainer = document.querySelector("#location-container");
        this.suspectContainer = document.querySelector("#suspect-container");
        this.location = null;
        this.locations = {};
    }
    setup = (mystery,location,suspects) => {
        console.log('building location');
        this.render(location,suspects)
    }
    render = (location,suspects) => {
        console.log('rendering');
        this.emptyContainer(this.locationContainer);
        this.emptyContainer(this.suspectContainer);
        this.buildLocation(location)
        this.buildSuspects(suspects)
    }
    buildHeader = (mystery) => {

    }
    buildLocation = (location) => {
        for(let x = 0; x < location.length; x++){
            const row = document.createElement('div');
            row.className = "row";
            for(let y = 0; y < location[x].length; y++){
                const room = document.createElement('div');
                room.className = "room " + location[x][y].name;
                room.id = location[x][y];
                room.textContent = location[x][y] === "empty" ? "" : location[x][y]['name'];
                row.appendChild(room);
                room.addEventListener('click',(e)=>this.game.searchRoom(e.target.id))
                if(location[x][y].occupants.length){
                    const footprint = this.buildObject("div",room,"footprint");
                }
                if(location[x][y].clues.length){
                    const clue = this.buildObject("div",room,"clue");
                }
            }
            this.locationContainer.appendChild(row)
        }
    }
    buildSuspects = (suspects) => {
        for(let x in suspects){
            const suspect = document.createElement("div");
            suspect.className = "suspect";
            suspect.id = suspects[x].name
            suspect.textContent = suspects[x].name;
            const bullet = document.createElement("div");
            bullet.textContent = suspects[x].interviews === 0 ? "?" : suspects[x].interviews;
            bullet.className = "bullet"
            bullet.style.backgroundColor = suspects[x].color;
            suspect.appendChild(bullet);
            this.suspectContainer.appendChild(suspect);
            suspect.addEventListener('click',(e)=>this.game.view(e.target.id))
        }
    }
    buildObject = (type,container,className,id) => {
        const obj = document.createElement(type);
              obj.className = className;
              obj.id = id
        container.appendChild(obj)
        return obj
    }
    emptyContainer = (container) => {
        if(container.firstChild){
            while(container.firstChild){
                container.removeChild(container.firstChild)
            }
        }
    }
}