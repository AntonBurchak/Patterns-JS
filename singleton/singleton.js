
/*
    Если включен strict-mode, выбрасывать ошибку при попытке создания еще одного синглтона.
    Опцию можно конфигурировать (отключать/включать) при вызове makeSingletonStorage()
*/
'use strict'

const strictModeIsEnabled = () => {
    const hasStrictMode = (function(){ return this })() === undefined;
    return hasStrictMode;
}

const makeSingletonStorage = ({storage = [], watchStrict = false} = {}) => {
    return {
        add(object) {
            if (this.has(object.constructor)) {
                return this.get(object.constructor)
            } else {
                storage.push(object);
            }
        },
        has(constructor) {
            return !!storage.find(object => object.constructor === constructor);
        },
        get(constructor) {
            return storage.find(object => object.constructor === constructor).object;
        },
        size() {
            return storage.length;
        },
        show() {
            return storage;
        },
        watchStrict
    }
}


function makeSingleton(fn, ...args){
    const storage = singletonStorage;

    try {
        if (storage.has(fn.name)) {
            if (strictModeIsEnabled() && storage.watchStrict) {
                throw new Error('Singletone object with this constructor has been created') 
            } else {
                return storage.get(fn.name);
            }
        } else {
            storage.add({
                constructor: fn.name,
                object: new fn(...args)
            });
            return storage.get(fn.name);
        }
    }
    catch (error) {
        if (error.name === 'ReferenceError') {
            console.error('Ref Error: <singletonStorage> must be defined before using <makeSingleton()>')
        } else {
            console.error(error)
        }
    }
}

/*
    Обязательное создание хранилища. 
    Можно создать в любом участке кода, главное перед использованиям функции makeSingleton()

    Рекомендуется создать в файле кофигураций или главном index.js файле.
*/

const singletonStorage = makeSingletonStorage();



/* =======================TEST========================= */

function User(name, age) {
    this.name = name;
    this.age = age;
}
  
  
  const user1 = makeSingleton(User, 'Peter', 25);
  const user2 = makeSingleton(User, 'Mark', 24);
  const user3 = makeSingleton(User, 'Anton', 19);
  
  
  console.log(user1);
  console.log(user2);
  console.log(user3);
  
  console.log(user1 === user2);
  console.log(user2 === user3);
  console.log(user1 === user3);

  console.log(singletonStorage.size())
  console.log(singletonStorage.show())
  
/* =======================/TEST========================= */
