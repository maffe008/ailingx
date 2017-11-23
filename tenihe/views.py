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
        '010800101': "特泥河农场八队001地块2017-08-16架次",
        '010800201': "特泥河农场八队002地块2017-08-16架次",
        '010800102': "特泥河农场八队001地块2017-08-30架次",
        '010800202': "特泥河农场八队002地块2017-08-30架次",
        '010800104': "特泥河农场八队001地块2017-10-18架次",
        '010800204': "特泥河农场八队002地块2017-10-18架次",
    }
    return switcher.get(argument, "nothing")


def abc_id_to_abc_centerP(argument):
    switcherlng = {
        '010800101': "120.36365",
        '010800201': "120.34881",
        '010800102': "120.36365",
        '010800202': "120.34881",
        '010800104': "120.36365",
        '010800204': "120.34881",
    }
    switcherlat = {
        '010800101': "49.52156",
        '010800201': "49.52691",
        '010800102': "49.52156",
        '010800202': "49.52691",
        '010800104': "49.52156",
        '010800204': "49.52691",
    }
    switcherzoom = {
        '010800101': "18",
        '010800201': "18",
        '010800102': "18",
        '010800202': "18",
        '010800104': "18",
        '010800204': "18",
    }
    return switcherlng.get(argument, "120"), \
           switcherlat.get(argument, "49"), \
           switcherzoom.get(argument, "15")


def abc_id_to_abc_imgloc(argument):
    switchernorth = {
        '010800101': "49.52325",
        '010800201': "49.52935",
        '010800102': "49.52325",
        '010800202': "49.52935",
        '010800104': "49.52325",
        '010800204': "49.52935",
    }
    switchersouth = {
        '010800101': "49.520",
        '010800201': "49.5243",
        '010800102': "49.520",
        '010800202': "49.5243",
        '010800104': "49.520",
        '010800204': "49.5243",
    }
    switcherwest = {
        '010800101': "120.35877",
        '010800201': "120.34283",
        '010800102': "120.35877",
        '010800202': "120.34283",
        '010800104': "120.35877",
        '010800204': "120.34283",
    }
    switchereast = {
        '010800101': "120.36831",
        '010800201': "120.35726",
        '010800102': "120.36831",
        '010800202': "120.35726",
        '010800104': "120.36831",
        '010800204': "120.35726",
    }
    return switchernorth.get(argument, "49"),\
           switchersouth.get(argument, "49"),\
           switcherwest.get(argument, "120"),\
           switchereast.get(argument, "120")


def abc_id_to_abc_imgurl(argument):
    switchernc = {
        '010800101': "/static/img/Dateimg/0108001_01_nc.png",
        '010800201': "/static/img/Dateimg/0108002_01_nc.png",
        '010800102': "/static/img/Dateimg/0108001_02_nc.png",
        '010800202': "/static/img/Dateimg/0108002_02_nc.png",
        '010800104': "/static/img/Dateimg/0108001_04_nc.png",
        '010800204': "/static/img/Dateimg/0108002_04_nc.png",
    }
    switcherndvi = {
        '010800101': "/static/img/Dateimg/0108001_01_ndvi.png",
        '010800201': "/static/img/Dateimg/0108002_01_ndvi.png",
        '010800102': "/static/img/Dateimg/0108001_02_ndvi.png",
        '010800202': "/static/img/Dateimg/0108002_02_ndvi.png",
        '010800104': "/static/img/Dateimg/0108001_04_ndvi.png",
        '010800204': "/static/img/Dateimg/0108002_04_ndvi.png",
    }
    switcherthermal = {
        '010800101': "/static/img/Dateimg/0108001_01_thermal.png",
        '010800201': "/static/img/Dateimg/0108002_01_thermal.png",
        '010800102': "/static/img/Dateimg/0108001_02_thermal.png",
        '010800202': "/static/img/Dateimg/0108002_02_thermal.png",
        '010800104': "/static/img/Dateimg/0108001_04_thermal.png",
        '010800204': "/static/img/Dateimg/0108002_04_thermal.png",
    }
    return switchernc.get(argument, "/static/img/default.png"),\
           switcherndvi.get(argument, "/static/img/default.png"),\
           switcherthermal.get(argument, "/static/img/default.png"),

