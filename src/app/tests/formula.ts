export class formula{
    c=0;
    o=0;
    calcular(n:number){
        if(n<=0){
            return 0;
        }
        this.o=1/n;
        this.c= 1-this.o;
        return this.c;
    }
}