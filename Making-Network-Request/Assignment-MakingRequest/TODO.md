## 1. What is the use case of event loop?

### Answer:-)

- Event loop is basically use to take function from callback queue and handover to callstack for execution.
- it is always taking care of callstack's status that it is empty or not.
- when the callstack will empty it will push the waiting function from callback queue to callstack for execution.

## 2. What gets stored in callback queue?

#### Answer:-)

- callback queue takes callback from web browser API which marked as completed and store it until code gets executed in callstack.

## 3. Write two examples of how you can make network request using XMLHttpRequest

#### Answer:-)

- we can make network request using XMLHttpRequest with their method GET,PUT,DELETE & POST
- `example:-)`
- let xhr = new XMLHttpRequest()
- xhr.open("GET","URL")
- xhr.open("POST","URL")

## 4. What are the different ways to call function once data is loaded?

#### Answer:-)

- we can use either addeventlistner method then event load or we can use the method onload directly. In both situations, it will work
