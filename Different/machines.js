'use strict';
                                      //  ОБЩИЙ КЛАСС МАШИНЫ
    function Machine (power) {
     this._power = power; 
     this._enabled = false;
    
      this.enable = function() {
        this._enabled = true;
      };
    
      this.disable = function() {
        this._enabled = false;
      };
    }
                                     //  КОФЕВАРКА
    function CoffeeMachine () {
      Machine.apply(this, arguments);
         // this.disable();
    
   var stat =  (this._enabled) ? 'Кофеварище включено. ' : 'Кофеварище выключено. ';
      alert(stat + " Мощность имеем Вт: " + this._power ); // 10000
    }
    
                                      //  РЕНТГЕН-АППАРАТ   
    function rentgenMachine (mode) {
      Machine.apply(this, arguments); 
      
      var isPacientAlive = 'true';
      
      alert ("Создан новый образец рентгенушки, мощность: " + mode);
      
      this.changeMode = function () {
        
        var newMode = prompt ('какой режим теперь бабахнуть?');  
        isPacientAlive = (newMode == 'на полную') ? false : true;
        
         if (this._enabled == true) {
           var stat = (isPacientAlive) ? ' Пациент вроде жив' : ' Упс. Пациент кажись мертв';
           alert (" Новый режим мощности: " + newMode + '\n' + stat );
         }
       else alert (" Новый режим мощности: " + newMode + '\n' + "Аппарат выключен, пациент жив.");
      };
    }
    
    
    // var coffeeMachine = new CoffeeMachine(2585, true);
    var newRen = new rentgenMachine ('средний'); 
    // newRen.enable();
    newRen.changeMode();