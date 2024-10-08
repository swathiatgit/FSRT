import ForgeUI, { render, Fragment, Macro, Text } from '@forge/ui';
import api, { route, fetch } from '@forge/api';
import { testFn } from './test';

const foo = () => {
  const res = api.asApp().requestConfluence(route`/rest/api/3/test`);
  test_function("hi")
  return res;
};

let test_function = (word) => {
  console.log(word);
  let test_var = "test_var";
}

function test_bug() {
    let b = 3;
    let a = b
  }
  
  function complex(a) {
    let b = a - 20;
    let c = b + 1;
    b = 10;
    return b * 10;
  }
  
  function simple() {
    let a = 4;
    let b = 7;
    a = 10;
    a = 5;
  }
  
  function reassign() {
    let a = 4;
    let b = "7";
    b = "7" + a;
  }
  
  function var_reref() {
    let a = 4;
    let b = 7;
    a = 10;
    let c = a + b
    a = 5;
    c = 2 * b;
  }

const App = () => {

    let testObjectOther = {
        someFunction(): any {
            let a = "b";
        }
    }

  let testObject = {
    someFunction() {
      const res = api.asApp().requestConfluence(route`/rest/api/3/test`);
      test_function("hi")
      return res;
    }
  }

    let value = "value"

    let h = { headers: { authorization: "test" } }
    h.headers.authorization = process.env.SECRET
    h.headers.authorization = `test ${value}`


    fetch("url", h)

  foo();
  test_function("test_word");
  testFn();
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);

function reassign() {
    let a = 3;
    let b = 4;
    a = 1;
  }
  
  function retimmed() {
    return
  }
  
  function reassign2() {
    let a = 3;
    let b = 4;
    a = 1;
    return
  }
  
  function updatetest() {
      let i = 0;
      i++;
  }
  
  function updatetest2() {
      let i = 0;
      i = i + 1;
  }
  
  // function foo(a) {
  //   let b = a - 20;
  //   let c = b + 1;
  //   b = 10;
  //   return b * 10;
  // }
  
  // function reassign_expr() {
  //   let a = 4;
  //   let b = "7";
  //   b = "7" + a;
  //   let c = a + b;
  // }
  
  // w/ control flow
  function newfunc() {
    let a = 3;
    if (a > 2) {
      a = 1;
      let b = a;
    }  
    let c = a;
  }
  
  function newfunc2() {
    let a = 3;
    if (a > 2) {
      a = 1;
      let b = a;
    } else {
      a = 2;
      let b = a;
    }
    let c = a;
  }
  
  function compnewfunc2() {
    let a = Math.random();
    let b = 0;
    if (a >= 0.5) {
      if (a > 0.5) {
        a = a + 1;
      } else {
        a = a + 2;
      }
      b = a + 3;
    }
    let c = a;
  }
  
  function compnewfunc3() {
    let a = Math.random();  // bb0
    let b = 0;
    if (a >= 0.5) {
      if (a > 0.5) { // bb1
        a = a + 1;   // bb4
      } else {
        a = a + 2;  // bb6
      }
      b = a + 3;  // bb5
    } else {  // bb3
      b = a + 4;
    }
    let c = a;  // bb2
  }
  
  function forloop() {
    let a = 0;
    for (let i = 0; i < 10; i = i + 1) {
      a = a + i;
    }
    return a;
  }
  
  function whileloop() {
    let a = 0;
    let i = 0;
    while (i < 10) {
      a = a + i;  // bb3
      i = i + 1;
    }
    return a;
  }
  
  function nestedforloop() {
      let a = 0;
      for (let i = 0; i < 10; i = i + 1) {
        for (let j = 0; j < 10; j = j + 1) {
          a = a + i + j;
        }
      }
      return a;
  }
  
  function nestedwhileloop() {
    let a = 0;
    let i = 0;  // bb0
    while (i < 10) {  // bb1
      let j = 0;  // bb3
      while (j < 10) {  // bb4
        a = a + i + j;  // bb6
        j = j + 1;
      }
      i = i + 1;  // bb5
    }
    return a;  // bb2
  }
  
  function whileandcond() {
    let a = 0;
    let i = 0;  // bb0
    while (i < 10) {  // bb1
      if (i > 5) {  // bb3
        a = a + i;  // bb4
      }
      i++;  // bb5
    }
    return a;  // bb2
  }
  
  function whileandcond2() {
    let a = 0;
    let i = 0;  // bb0
    while (i < 10) {  // bb1
      if (i > 5) {  // bb3
        a = a + 1;  // bb4
      } else {
        a = a + 2;  // bb6
      }
      i++;  // bb5
    }
    return a;  // bb2
  }
  
  function whileincond() {
    let a = 0;
    let b = Math.random();  // bb0
    if (b < 0.5) {  // bb1
      while (a < 2) {  // bb4
        a = a + b;  // bb6
      } 
                    // bb5
    } else {
      a = 1;  // bb3
    }
    return a;  // bb2
  }
  function earlyretforloop() {
      for (let i = 0; i < 10; i = i + 1) {
          let a = Math.random();
          if (a > 0.5) {
              return;
          }
      }
  }
  
  function earlyretwhileloop() {
      let i = 0;  // bb0
      while (i < 10) {  // bb1
        let a = Math.random();  // bb3
        if (a > 0.5) {
          return;  // bb4
        }
        i = i + 1;  // bb5
      }
      // bb2
  }
  
  // early return in `if` only
  function earlyret() {
    let a = 0; 
    if (a > 5) {  // bb0
      a = 1;
      return a;  // bb1
    }
    let b = 4;
    return a;  // bb2
  }
  
  // early return in `else` only
  function earlyret2() {
    let a = 0; 
    if (a > 5) {
      a = 1;
    } else {
      a = 2;
      return a;
      let c = 3;
    }
    let b = 4;
    return a;
  }
  
  // early return in 'if' and 'else'
  function earlyret3() {
    let a = 0; 
    if (a > 5) {
      a = 1;
      return a;
    } else {
      a = 2;
      return a;
    }
    let b = 4;  // a bb still gets created, it's just
                // never jumped to. check if this is OK?
                // assuming that this is how compilers work
                // to detect unreachable code
    return a;
  }
  
  // function earlyretloop() {
  //   let a = 0;
  //   let i = 0;
  //   while (i < 10) {
  //     if (i > 5) {
  //       return 1;
  //     }
  //     i = i + 1;
  //   }
  // }
  
  function loopbreak() {
    let a = 0;
    let i = 0;  // bb0
    while (i < 10) {  // bb1
      if (i > 5) {  // bb3
        a = 1;  // bb4
        break;
      }
      i = i + 1;  // bb5
    }
    return a;  // bb2
  }