import os
import string
import json
import csv

def main():
    R = []
    ii = 0
    data_id = 'ch_1A9eTZHBgQvUZ8ziSom0D2Yb'
    found = 0

    while ii < 2000:
        if ii >= 0:
            modstart = '-d starting_after='+str(data_id)+''
        else:
            modstart = ''
        print modstart
        curl_string = \
            'curl https://api.stripe.com/v1/charges?limit=100 ' + \
            '-H "Authorization: Bearer sk_test_OZ28Kmnx74fdqOePLY4feRgp" ' + \
            str(modstart) + ' ' + \
            '-d expand[]=data.customer -G'
        print curl_string
        r1 = os.popen(curl_string).read()
        r2 = string.replace(r1, "\n  ", "")
        r3 = string.replace(r2, " ", "")
        r4 = json.loads(r3)
       # print r4
       # print len(r4['data'])
        w = len(r4['data'])
        r5 = []
        i = 0
        while i < w:
            status = r4['data'][i]['status']  # charge status
            created = r4['data'][i]['created']  # unix ts
            data_id = r4['data'][i]['id']  # charge id
            amount = r4['data'][i]['amount']  # amount
            customer_OBJECT = r4['data'][i]['customer']
            if 'deleted' not in customer_OBJECT:
                customer_id = r4['data'][i]['customer']['id']
                customer_email = r4['data'][i]['customer']['email']
            row = [status, created, data_id, amount, customer_id, customer_email]
            r5.append(row)
            # print row
            # print 'i: '+str(i)
            i += 1

        R.extend(r5)
        print 'ii: ' + str(ii)
        ii += 1

    # output R to CSV after everything is done
    with open('report.csv', 'wb') as csvfile:
        csvwriter = csv.writer(csvfile)
        for row in R:
            csvwriter.writerow(row)


if __name__ == '__main__':
    main()
