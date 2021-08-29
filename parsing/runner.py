from parse import GoodOnYou
import json

def get_brand_list_test(g):
    brands = g.get_some_brand_tags(g.get_categories_test(), True)
    return brands

def write_to_file_names(text_list, filename):
    f = open(filename, 'w')
    for text in text_list:
        f.write(text + "\n")
    f.close()

def write_to_file_data(brand_dict, names_list, filename):
    f = open(filename, 'w')
    i = 1
    for name in names_list:
        data = str(brand_dict[name])
        f.write(name + ': ' + data)
        f.write("\n")
        print("{} of 260".format(i))
        i += 1
    f.close()

def read_file_split(filename):
    file = open(filename, 'r')
    full_text = file.read()
    item_list = full_text.split("\n")
    file.close()
    return item_list

def reformat_url_search(filename, brand_tags_list):
    file = open(filename, 'w')
    for brand_tag in brand_tags_list:
        file.write('\t\"'+brand_tag.replace('-','')+'\",')
        file.write('\n')
    file.close()


def main():
    # g = GoodOnYou()

    ############################ get brand tag list ##############################
    # brands_tags = get_brand_list_test(g)
    # write_to_file(brand_tags, 'brand_tags.txt')

    ######################## get brand name list and data ########################
    # brand_tags_list = read_file_split('brand_tags.txt')
    # brand_tags_dict = g.get_data(brand_tags_list)
    # write_to_file_names(brand_tags_dict, 'brand_names.txt')
    # brand_names_list = read_file_split('brand_names.txt') 
    # write_to_file_data(brand_tags_dict, brand_names_list, 'brand_data.txt')

    ################## get brand name list formatted for url #####################
    # reformat_url_search('brand_url_search', brand_tags_list)

    ###################### reformatting brand data for json ######################

    # print('done!')

main()