from parse import GoodOnYou

def get_brand_list_test(g):
    brands = g.get_some_brand_tags(g.get_categories_test(), True)
    return brands

def write_to_file(brands):
    f = open('brand_tags.txt', 'w')
    for brand in brands:
        f.write(brand + "\n")
    f.close()

def main():
    g = GoodOnYou()
    # brands_tags = get_brand_list_test(g)
    # write_to_file(g.get_data(brands_tags))

    print("done!")

main()