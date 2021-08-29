from parse import GoodOnYou

def get_brand_list_test(g):
    brands = g.get_some_brand_tags(g.get_categories_test(), True)
    return brands

def get_brand_list_total(g):
    brands = g.get_every_brand_tag(g.get_categories())
    return brands

def write_to_file_test(n, brands):
    f = open('brand_names.txt', 'w')
    brands_list = brands[:n]
    for brand in brands_list:
        f.write(brand + "\n")
    f.close()

def write_to_file(brands):
    f = open('brand_names.txt', 'w')
    for brand in brands:
        f.write(brand + "\n")
    f.close()

def main():
    g = GoodOnYou()
    brands = get_brand_list_test(g)
    write_to_file(brands)
    print("done!")

main()