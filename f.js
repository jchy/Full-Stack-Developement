function subsetSum(arr, n, sum,count)
{
  console.log("Now value of arr, n, sum, count is : ", arr,n,sum,count);
    if (n == 0)
    {
      if (sum%2!=0){
        count++;
      console.log("Now count, sum on line 7 is : ", count, sum);
      }
      return count;
    }
   count = subsetSum(arr, n - 1, sum, count);
   console.log("Now arr, n-1, sum, count on line 12 is : ", arr, n-1, sum, count);
   count = subsetSum(arr, n - 1, sum + arr[n - 1],count);
   console.log("Now arr, n-1, sum, count on line 14 is : ", arr, n-1, sum, count);
   return count;
}

    var n=3;
    var arr=[1,2,3];
    var sum=0;
    var count=0;
    console.log(subsetSum(arr, n,sum, count));