import {formula} from './formula';

describe ('Calcular',() => {
    let frmla: formula;
    let c: number;
    beforeEach(()=>{
        frmla= new formula();
    });
    
    it('si N tiene valor 0, retornar 0',() =>{  
        c=frmla.calcular(0);
        expect(c).toBe(0);
    });
    it('si N es 10 y n es 5, orden es 0.2 y caos 0.4',() =>{  
        c=frmla.calcular(5);
        expect(c).toBe(0.8);
    });
    it('no pueden haber numeros negativos, o retorna 0',() =>{  
        c=frmla.calcular(-10);
        expect(c).toBe(0);
    });
});