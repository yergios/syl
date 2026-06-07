import syl_objects from "./objects.js";
import syl_testing from "../testing/testing.js";

console.log("is_object correctly identifies an object");
syl_testing.assert(syl_objects.is_object(Object.create({})));

console.log("is_object correctly identifies an object literal");
syl_testing.assert(syl_objects.is_object({}));

console.log("is_object correctly identifies an array");
syl_testing.assert(!syl_objects.is_object([]));

console.log("is_object correctly identifies a null");
syl_testing.assert(!syl_objects.is_object(null));

console.log("is_object correctly identifies a regexp");
syl_testing.assert(!syl_objects.is_object(/a/));
