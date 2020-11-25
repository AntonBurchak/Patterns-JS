/* =========================MEDIATOR=========================== */
/*                          SIMULATE                            */

function Airplane(id, mediator) {
    this.id = id;
    this.mediator = mediator;
}

Airplane.prototype.landOn = function() {
    console.log(`Airplane model ${this.id} is landing`);
    this.mediator.landOn(this.id);
}

Airplane.prototype.wait = function() {
    console.log(`Airplane model ${this.id} wait for landing`);
}

const mediator = (function() {
    return {
        planes: [],
        addPlane(id) {
            this.planes.push(id);
        },
        landOn(id) {
            this.planes.forEach(airplane => {
                if (id === airplane.id) {
                    this.planes = this.planes.filter(plane => plane !== airplane);
                } else {
                    airplane.wait();
                }
            })
        }
    }
})();

const Boeing747_1 = new Airplane('Boeing747-FW12', mediator);
const Boeing747_2 = new Airplane('Boeing747-FW13', mediator);
const Boeing734 = new Airplane('Boeing734-JK05', mediator);
const Boeing737 = new Airplane('Boeing737-CV15', mediator);


mediator.addPlane(Boeing747_1);
mediator.addPlane(Boeing747_2);
mediator.addPlane(Boeing734);
mediator.addPlane(Boeing737);

/* 4 самолёта ждут своей посадки */
Boeing747_1.landOn(); // Диспетчер говорит первому самолёту заходить на посадку
console.log('\n');
Boeing747_2.landOn(); // После посадки предыдущего, даёт разрешение на посадку текущему
console.log('\n');
Boeing734.landOn(); // .. и так далее, пока не посадит все самолёты
console.log('\n');
Boeing737.landOn();