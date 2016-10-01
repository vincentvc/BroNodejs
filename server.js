process.env.NODE_ENV = 'localtest'; // comment it if depoly
var express = require('express');
var lodash = require('lodash');
var methodoverride = require("method-override");
var mongoose = require('./config/mongodb');
var noderestful = require("node-restful");
var config = require('./config/config');

