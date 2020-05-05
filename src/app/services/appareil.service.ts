import { Subject } from "rxjs";

export class AppareilService  {
appareilSubdject = new Subject<any[]>();

 private appareils = [
    {
        id: 1,
      name: 'Vidéo',
      status: 'eteint'
    }, {
    id: 2,
    name: 'Télivision',
    status: 'allumer'
    }, {
     id: 3,
      name: 'frigot',
      status: 'allumer'
      }
 ];
 emitappareilsubject() {
   this.appareilSubdject.next(this.appareils.slice());
 }
  getAppareilById(id: number) {

      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );
      this.emitappareilsubject();
      return appareil;
  }
 switchOnAll() {
   this.emitappareilsubject();
  for (let appareil of this.appareils) {
      appareil.status = 'allumer';
  }
 }

 switchOffAll()
 {
  this.emitappareilsubject();
 	for(let appareil of this.appareils)
 	{
 		appareil.status = 'eteint';
 	}
 }

	 switchOne(index: number)
	 {
     this.appareils[index].status = 'allumer';
     this.emitappareilsubject();
	 }

	 OffOne(index: number)
	 {
     this.appareils[index].status = ' eteint';
     this.emitappareilsubject();
   }

   addappareil(name: string, status: string) {

    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1 )].id + 1;

    this.appareils.push(appareilObject);
    this.emitappareilsubject();

   }
}
