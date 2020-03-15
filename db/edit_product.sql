update product 
set product_name = $2,
product_price = $3,
img = $4
where product_id = $1;
