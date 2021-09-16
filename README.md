# **Floom QA Exercise**

Great to hear that you’re looking to get involved with Floom. Create a new private Github repo, push your solution and add us as a collaborator when you're ready. Add github handles, `ahnunn`, `richieteo` as collaborators.

### **Overall Task**

At Floom, we have a B2B (florist facing) product and a B2C (consumer facing) product. This exercise deals with understanding your approach to making some changes to our B2B product.

Some terminology:

**Florist** = 1 of many partners that use our software and sell on Floom.com

Each florist sells a **Product** (a bouquet of flowers)

Each product consists of one or more **Flowers**

For Example:

The florist ***London Bridge Floristry*** sells a product called **Elegance** which has two flowers, **Red Rose** and **Red Ranunculus**

For the purposes of keeping the exercise simple, we have assumed that there is only 1 florist on

the platform, only 2 products and only 2 flowers

| Florist | Product | Flower | Colour | Quantity |
| --- | --- | --- | --- | --- |
| London Bridge Floristry | Elegance | Rose | Red | 3 |
|  |  | Ranunculus | Red | 3 |
| | True Love | Rose | Red | 10 |

We currently have a very basic Api and Front-end setup to access the product information, This code base should be used as the target of your testing

### **Subtask 1 (BDD Test Design)**

The development teams next feature for this project is to extend the api with `/florists` endpoint which will return to the front-end a list florists in the same way as the current `/products` endpoint, Once complete the api should have be able to return a full list of florists and individual florist records, using a RESTful style.

We would like you to create a set of BDD feature scenarios to to cover this new body of work. these should validate the backend portion of the codebase.

### **Subtask 2 (Front End automated Test)**

The current UI contains a `/productlist` page and a `/productdetails` page,
both of these pages have a loading indicator to show the end user when data is being pulled from the Api.

We would like you to devise an example automated test, which confirms that these loading indicators are only shown whilst data is loading, and ensures that they are hidden at all other times.

### **Subtask 3 (Manual Test plan)**

Once the Development team has added florist information to the Api, their next task will be to display this information on the product details page as per the example designs included in the top level `/designs` folder.

Please provide a set of acceptance criteria and a manual test plan to validate this feature.

### **Bonus Items (not required)**

### Subtask 5 (Bug Report)

If you encounter any bugs with the existing code you have been provided.

We would like you like to draft a bug report including steps to reproduce which is ready to hand to the development team to either diagnose or fix the discovered issue.

## **Data + Endpoints + Client**

`cd frontend && npm install && npm run start` will pull packages required to build the frontend project and run it in dev mode

`cd backend && npm install && npm run start` will pull packages required to build the backend project and run it in dev mode

We have provided a **Product List** api endpoint that provides a list of products and specific product details.

## **Deliverables**

- Constraints - We are primarily interested in your approach and functional design. All executable code added to the project should be Typescript.
- Beyond that you're open to use any frameworks you wish. We'll discuss your choices in our follow up meeting.
- We have provided runnable code for the Frontend project as well as for the Api endpoints and data-models you should target your testing towards this code.
- We don't wish for you to spend longer than one or two hours on this task. If you haven't time to complete all elements of the task that's fine, we can talk about them more in person.
- We will be evaluating primarily on the strength the implementation directly connected to the tasks listed, as opposed to rigging and boiler plating.
