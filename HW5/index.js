https://stackblitz.com/edit/js-tbnzgm?file=index.js,index.html

const state = {
  'a': 'apple',
  'b': 'banana',
  'c': 'city',
  'd': 'dom',
  'e': 'end',
  'f': 'forEach',
  'g': 'gold',
};

function drop(){
    let dropDown = document.createElement('div');
    let selectKey = document.createElement('select');
    let selectValue = document.createElement('select');
    // let test = document.createElement('select');
    let _state = {}
    function createDorpDown(){
        for(let i in state){
            _state[state[i]] = i;
            let keyOp = document.createElement('option');
            let valueOp = document.createElement('option');
            // console.log(i);
            keyOp.value = keyOp.innerHTML = i;
            valueOp.value = valueOp.innerHTML = state[i];
            selectKey.append(keyOp);
            selectValue.append(valueOp);
        }
        dropDown.appendChild(selectKey);
        dropDown.appendChild(selectValue);
        // dropDown.appendChild(test);
    }
    createDorpDown();
    document.body.appendChild(dropDown);
    selectKey.onchange = (event)=>{
        let newValue = state[event.target.value];
        selectValue.value = newValue;
    }
    selectValue.onchange = (event)=>{
        let newValue = _state[event.target.value];
        selectKey.value = newValue;
    }
}
drop();