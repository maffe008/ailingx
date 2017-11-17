#-*- coding: UTF-8 -*-
from django.shortcuts import render
import json
import random
import math
# Create your views here.

def tenihegis(request):
    return render(request, 'tenihegis.html')


class IllTree:

    def __init__(self, index, lng, lat, area, count):
        self.index = index
        self.lng = lng
        self.lat = lat
        self.area = area
        self.count = count


class CellImg:

    def __init__(self, index, name, center_pt_lng, center_pt_lat, zoom_level, img_n, img_s, img_w, img_e, img_url_nc, img_url_ndvi, img_url_th):
        self.index = index
        self.name = name
        self.center_pt_lng = center_pt_lng
        self.center_pt_lat = center_pt_lat
        self.zoom_level = zoom_level
        self.img_n = img_n
        self.img_s = img_s
        self.img_w = img_w
        self.img_e = img_e
        self.img_url_nc = img_url_nc
        self.img_url_ndvi = img_url_ndvi
        self.img_url_th = img_url_th


def tenihemap(request, param1):

    abc_id = param1
    abc_name = abc_id_to_abc_name(abc_id)
    (centerPlng, centerPlat, zoom) = abc_id_to_abc_centerP(abc_id)
    nswe = abc_id_to_abc_imgloc(abc_id)
    (NCurl, NDVIurl, THurl) = abc_id_to_abc_imgurl(abc_id)

    illtreecount = random.randint(15, 30)
    illtrees = []
    for i in range(0, illtreecount):
        num = random.randint(5, 100)
        aindex = i
        lng = round(random.uniform(float(nswe[1]), float(nswe[0])), 6)
        lat = round(random.uniform(float(nswe[2]), float(nswe[3])), 6)
        area = num*random.randint(1, 5)
        count = num
        a_illtree = IllTree(aindex, lng, lat, area, count)
        illtrees.append(a_illtree)

    return render(request, 'tenihemap.html', {
        'abc_id': abc_id,
        'abc_name': abc_name,
        'centerPlng': json.dumps(centerPlng),
        'centerPlat': json.dumps(centerPlat),
        'zoom': json.dumps(zoom),
        'img_nswe': json.dumps(nswe),
        'NCurl': json.dumps(NCurl),
        'NDVIurl': json.dumps(NDVIurl),
        'THurl': json.dumps(THurl),
        'illtrees': illtrees,
    })



def getcell(argument):
    switcher = {
        '0108001': CellImg(108001,"特泥河农场八队001地块",120.362,49.52439,15,49.52809,49.51962,120.3554,120.36856,'static/img/Dateimg/1.png','static/img/Dateimg/2.png','static/img/Dateimg/3.png'),
    }
    return switcher.get(argument, None)


def abc_id_to_abc_name(argument):
    switcher = {
        '010800104': "特泥河农场八队001地块",
    }
    return switcher.get(argument, "nothing")


def abc_id_to_abc_centerP(argument):
    switcherlng = {
        '010800104': "120.362",
    }
    switcherlat = {
        '010800104': "49.52439",
    }
    switcherzoom = {
        '010800104': "18",
    }
    return switcherlng.get(argument, "120"), \
           switcherlat.get(argument, "49"), \
           switcherzoom.get(argument, "15")


def abc_id_to_abc_imgloc(argument):
    switchernorth = {
        '010800104':"49.52809",
    }
    switchersouth = {
        '010800104': "49.51962",
    }
    switcherwest = {
        '010800104':"120.3554",
    }
    switchereast = {
        '010800104': "120.36856",
    }
    return switchernorth.get(argument, "49"),\
           switchersouth.get(argument, "49"),\
           switcherwest.get(argument, "120"),\
           switchereast.get(argument, "120")


def abc_id_to_abc_imgurl(argument):
    switchernc = {
        '010800104': "/static/img/Dateimg/1.png",
    }
    switcherndvi = {
        '010800104': "/static/img/Dateimg/2.png",
    }
    switcherthermal = {
        '010800104': "/static/img/Dateimg/3.png",
    }
    return switchernc.get(argument, "/static/img/default.png"),\
           switcherndvi.get(argument, "/static/img/default.png"),\
           switcherthermal.get(argument, "/static/img/default.png"),

