# date-typescript-library

## How to use

I created this library like the function date of php, do after you install the library you can use this way ```date("Y-m-d");```

Will return the current date

You need pass a string in function date, we have one parameters necessary and two optional

> Y = year (2021)
>
> m = month (06)
>
> M = short name of month JUL
>
> D = weekday (Friday)
>
> d = day (09)
>
> H = hour (10)
>
> i = minute (05)
>
> s = seconds (05)

You can use the way you want like: ```date("d/m/Y H:i:s");```

We have the second paramenter, in this paramenter you need use other function of this library  ```strtotime()```, you need pass a string like "+ 1 DAYS", you can use "+" or "-" and use "MINUTES", "HOURS", "DAYS", "WEEKS" "MONTHS", "YEARS" like: ```date("Y-m-d", strtotime("+ 30 DAYS")) ```

You can use ```strtotime()``` alone this function return date current more the days you passed, will return in milliseconds.

We have third parament this paramenter is optional you can use for define region ```date("Y-m-d",strtotime("+ 1 DAYS"), "pt-BR")```
