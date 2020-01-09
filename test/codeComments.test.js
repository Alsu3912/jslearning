const commentRemover = require("../src/codeComments");
 
test("1. There are no comments in text of code", () => {
    expect(commentRemover("fun doFun() {\n print('have a fun')\n }")).toStrictEqual("fun doFun() {\n print('have a fun')\n }");
});

test("2. There is // comment at the begining of the line in the text of code", () => {
    expect(commentRemover("// It's not so funcy, I know :( \nfun doFun() {\nprint('have a fun')\n}")).toStrictEqual("\nfun doFun() {\nprint('have a fun')\n}");
});

test("3. There is /* comment at the begining of the line in the text of code", () => {
    expect(commentRemover("/* \nThis is a funcy method \n*/\nfun doFun() {\nprint('have a fun')\n}")).toStrictEqual("\nfun doFun() {\nprint('have a fun')\n}");
});

test("4. There are several comments of diferent types in the text of code", () => {
    expect(commentRemover("/* \nThis is a funcy method \n*/\nfun doFun() {\nprint('have a fun') // It's not so funcy, I know :( \n}")).toStrictEqual("\nfun doFun() {\nprint('have a fun') \n}");
});

test("5. There is // comment not at the begining of the line in the text of code", () => {
    expect(commentRemover("fun doFun() {\nprint('have a fun') // It's not so funcy, I know :( \n}")).toStrictEqual("fun doFun() {\nprint('have a fun') \n}");
});

test("6. There is /* comment not at the begining of the line in the text of code", () => {
    expect(commentRemover("fun doFun() {\nprint('have a fun') /* It's not so funcy, I know :(\nyes*/}")).toStrictEqual("fun doFun() {\nprint('have a fun') }");
});

test("7. There is sign /* and no closing sign (*/) of a comment", () => {
    expect(commentRemover("fun doFun() {\nprint('have a fun') /* It's not so funcy, I know :(\n}")).toStrictEqual("fun doFun() {\nprint('have a fun') ");
});

test("8. There are two /* comments: /*abc*/ - /*fgh*/", () => {
    expect(commentRemover("/* \nThis is a funcy method \n*/123/*ghdsjhvd*/\nfun doFun() {\nprint('have a fun')\n}")).toStrictEqual("123\nfun doFun() {\nprint('have a fun')\n}");
});

test("9. There is double /* at the biginning of a comment and no closing sign (*/)", () => {
    expect(commentRemover("Test/* /* \nThis comment should dissapear\nAnd this part too")).toStrictEqual("Test");
});

test("10. There is double /* at the biginning of a comment and one closing sign (*/)", () => {
    expect(commentRemover("/* /* \nThis comment should dissapear*/\nAnd it is a code")).toStrictEqual("\nAnd it is a code");
});

test("11. There is one closing sign (*/) and no openning sign /*", () => {
    expect(commentRemover("This is not a comment*/\nAnd it is a code")).toStrictEqual("This is not a comment*/\nAnd it is a code");
});

test("12. There are double closing sign (*/) and no openning sign /*", () => {
    expect(commentRemover("This is not a comment*/*/\nAnd it is a code")).toStrictEqual("This is not a comment*");
});

test("13. There are one openning sign and then double closing sign (*/)", () => {
    expect(commentRemover("/*This is a comment*/*/\nAnd it is a code")).toStrictEqual("*/\nAnd it is a code");
});

test("14. There are one closing sign (*/) and then an openning sign", () => {
    expect(commentRemover("This is not a comment*/\nAnd it is a code\n/*This is a comment")).toStrictEqual("This is not a comment*/\nAnd it is a code\n");
});


test("15. A comment mark // in a quatation, there is no comments", () => {
    expect(commentRemover("fun doFun() {\nprint('have a fun, but remember use // when comment')\n}")).toStrictEqual("fun doFun() {\nprint('have a fun, but remember use // when comment')\n}");
});

test("16. A comment mark /* in a quatation, there is no comments", () => {
    expect(commentRemover("fun doFun() {\nprint('have a fun, but remember use /* when comment')\n}")).toStrictEqual("fun doFun() {\nprint('have a fun, but remember use /* when comment')\n}");
 });

test("17. A comment mark // after a quatation, it is a comment", () => {
     expect(commentRemover("fun doFun() {\nprint('have a fun') //comment\n}")).toStrictEqual("fun doFun() {\nprint('have a fun') \n}");
});

test("18. A comment mark /* after a quatation, it is a comment", () => {
     expect(commentRemover("fun doFun() {\nprint('have a fun') /*comment\n}")).toStrictEqual("fun doFun() {\nprint('have a fun') ");
});

// test("19. Mixed comments in the sample", () => {
//     let actual = `
//     // Hi! It's a sample
//     fun doFun() { /* It's a stupid comment */
//         var a = 1/0; // Should be Nan
//         println("// It's just text, so it should be in output");
//     }
//     `
//     let expected = `
//     fun doFun() { 
//         var a = 1/0; 
//         println('// It's just text, so it should be in output');
//     }
//     `
//     expect(commentRemover(actual)).toStrictEqual(expected);
// });
