//Since you’re going to be creating a new node every time you add 
//to the list, you decide to create a constructor that makes it 
//easier to create a new node for every value that’s added to your list.

class Node {  
  constructor(value) {    
    this.value = value;    
    this.next = null;  
  }
}
class LinkedList {   
  constructor() {    
    this._head = null;    
    this._tail = null;    
    this._length = 0;  
  }    
  
  add(value) {    
    let node = new Node(value);             
    if(!this._head && !this._tail){           
      this._head = node;                      
      this._tail = this._head;    
    }else{    
      this._tail.next = node;                 
      this._tail = this._tail.next;           
    }    this._length++;  
  }    contains(value){    
    let node = this._head;    
    while(node){      
      if(node.value === value){        
        return true;      
      }      
      node = node.next;    
    }    return false;  
  }    size() {    
    return this._length;  
  }}

  const AmazingRace = new LinkedList();
  AmazingRace.add("Colombo, Sri Lanka");
  AmazingRace.add("Lagos, Nigeria");
  AmazingRace.add("Surat, India");
  AmazingRace.add("Suzhou, China");
  console.log(AmazingRace)
  console.log(AmazingRace.contains('Suzhou, China'))