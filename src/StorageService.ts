interface StorageService {
 SetItem: (key: string, value: string) => Promise<boolean>;
 GetItem: (key: string) => Promise<string | null>;
 RemoveItem: (key: string) => Promise<boolean>;
 Clear: () => Promise<boolean>;
}

// check for local storage support
const supported = window.localStorage ? true : false;
export default class LocalStorage implements StorageService {
    SetItem(key: string, value: string) {
      return new Promise<boolean>((resolve, reject) => {
   if (supported) {
       localStorage.setItem(key, value)
       resolve(true)
   }else {
       reject(new Error)
   }
      })
   }
   GetItem(key: string) {
      return new Promise<string | null >((resolve, reject) => {
          if (supported) {
              const data = localStorage.getItem(key)
              resolve(data)
              return data;
          }else {
              reject(new Error)
          }
      })
   }
   RemoveItem(key: string) {
        return new Promise<boolean>((resolve, reject) => {
            if (supported) {
                localStorage.removeItem(key)
                resolve(true)
            } else {
                reject(new Error)
            }
        })
   }
   Clear() {
    return new Promise<boolean>((resolve, reject) => {
    if (supported) {
        localStorage.clear()
        resolve(true)
    }else
        reject(new Error)
    })
}

}

