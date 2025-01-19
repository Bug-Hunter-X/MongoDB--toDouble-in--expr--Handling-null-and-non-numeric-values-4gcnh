```javascript
const query = { $expr: { $gt: [ { $toDouble: { $ifNull: [ "$field", 0 ] } }, 10 ] } };
//This query handles null values by replacing them with 0

const query2 = { $expr: { $and: [{$isNumber: "$field"}, {$gt: [ { $toDouble: "$field" }, 10 ]}]} };
//This query checks if the field is a number before converting it to a double

const query3 = { $expr: { $gt: [ { $cond: { if: { $isNumber: "$field" }, then: { $toDouble: "$field" }, else: 0 } }, 10 ] } };
//This query uses $cond to handle non numeric values
```