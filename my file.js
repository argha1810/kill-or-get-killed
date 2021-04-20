function istouching(box1,box2) {
    if (box1.x-box2.x< (box1.width+box2.width)/2 && 
    box2.x-box1.x< (box1.width+box2.width)/2 &&
    box1.y-box2.y< (box1.height+box2.height)/2 &&
    box2.y-box1.y< (box1.height+box2.height)/2) 
    {
      return true;
  
    }
    else{
      return false;
    }
  
  }