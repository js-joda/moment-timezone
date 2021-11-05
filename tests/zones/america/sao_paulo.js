"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Sao_Paulo"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Sao_Paulo", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Sao_Paulo", { abbr: true }),

	"1931" : helpers.makeTestYear("America/Sao_Paulo", [
		["1931-10-03T13:59:59+00:00", "10:59:59", "-03", 180, 0],
		["1931-10-03T14:00:00+00:00", "12:00:00", "-02", 120, 1]
	]),

	"1932" : helpers.makeTestYear("America/Sao_Paulo", [
		["1932-04-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1932-04-01T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1932-10-03T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1932-10-03T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1933" : helpers.makeTestYear("America/Sao_Paulo", [
		["1933-04-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1933-04-01T02:00:00+00:00", "23:00:00", "-03", 180, 0]
	]),

	"1949" : helpers.makeTestYear("America/Sao_Paulo", [
		["1949-12-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1949-12-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1950" : helpers.makeTestYear("America/Sao_Paulo", [
		["1950-04-16T02:59:59+00:00", "00:59:59", "-02", 120, 1],
		["1950-04-16T03:00:00+00:00", "00:00:00", "-03", 180, 0],
		["1950-12-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1950-12-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1951" : helpers.makeTestYear("America/Sao_Paulo", [
		["1951-04-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1951-04-01T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1951-12-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1951-12-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1952" : helpers.makeTestYear("America/Sao_Paulo", [
		["1952-04-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1952-04-01T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1952-12-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1952-12-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1953" : helpers.makeTestYear("America/Sao_Paulo", [
		["1953-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1953-03-01T02:00:00+00:00", "23:00:00", "-03", 180, 0]
	]),

	"1963" : helpers.makeTestYear("America/Sao_Paulo", [
		["1963-10-23T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1963-10-23T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1964" : helpers.makeTestYear("America/Sao_Paulo", [
		["1964-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1964-03-01T02:00:00+00:00", "23:00:00", "-03", 180, 0]
	]),

	"1965" : helpers.makeTestYear("America/Sao_Paulo", [
		["1965-01-31T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1965-01-31T03:00:00+00:00", "01:00:00", "-02", 120, 1],
		["1965-03-31T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1965-03-31T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1965-12-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1965-12-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1966" : helpers.makeTestYear("America/Sao_Paulo", [
		["1966-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1966-03-01T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1966-11-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1966-11-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1967" : helpers.makeTestYear("America/Sao_Paulo", [
		["1967-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1967-03-01T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1967-11-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1967-11-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1968" : helpers.makeTestYear("America/Sao_Paulo", [
		["1968-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1968-03-01T02:00:00+00:00", "23:00:00", "-03", 180, 0]
	]),

	"1985" : helpers.makeTestYear("America/Sao_Paulo", [
		["1985-11-02T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1985-11-02T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1986" : helpers.makeTestYear("America/Sao_Paulo", [
		["1986-03-15T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1986-03-15T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1986-10-25T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1986-10-25T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1987" : helpers.makeTestYear("America/Sao_Paulo", [
		["1987-02-14T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1987-02-14T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1987-10-25T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1987-10-25T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1988" : helpers.makeTestYear("America/Sao_Paulo", [
		["1988-02-07T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1988-02-07T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1988-10-16T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1988-10-16T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1989" : helpers.makeTestYear("America/Sao_Paulo", [
		["1989-01-29T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1989-01-29T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1989-10-15T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1989-10-15T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1990" : helpers.makeTestYear("America/Sao_Paulo", [
		["1990-02-11T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1990-02-11T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1990-10-21T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1990-10-21T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1991" : helpers.makeTestYear("America/Sao_Paulo", [
		["1991-02-17T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1991-02-17T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1991-10-20T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1991-10-20T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1992" : helpers.makeTestYear("America/Sao_Paulo", [
		["1992-02-09T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1992-02-09T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1992-10-25T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1992-10-25T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1993" : helpers.makeTestYear("America/Sao_Paulo", [
		["1993-01-31T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1993-01-31T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1993-10-17T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1993-10-17T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1994" : helpers.makeTestYear("America/Sao_Paulo", [
		["1994-02-20T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1994-02-20T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1994-10-16T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1994-10-16T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1995" : helpers.makeTestYear("America/Sao_Paulo", [
		["1995-02-19T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1995-02-19T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1995-10-15T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1995-10-15T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1996" : helpers.makeTestYear("America/Sao_Paulo", [
		["1996-02-11T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1996-02-11T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1996-10-06T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1996-10-06T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1997" : helpers.makeTestYear("America/Sao_Paulo", [
		["1997-02-16T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1997-02-16T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1997-10-06T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1997-10-06T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1998" : helpers.makeTestYear("America/Sao_Paulo", [
		["1998-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1998-03-01T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1998-10-11T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1998-10-11T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1999" : helpers.makeTestYear("America/Sao_Paulo", [
		["1999-02-21T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1999-02-21T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1999-10-03T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1999-10-03T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2000" : helpers.makeTestYear("America/Sao_Paulo", [
		["2000-02-27T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2000-02-27T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2000-10-08T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2000-10-08T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2001" : helpers.makeTestYear("America/Sao_Paulo", [
		["2001-02-18T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2001-02-18T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2001-10-14T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2001-10-14T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2002" : helpers.makeTestYear("America/Sao_Paulo", [
		["2002-02-17T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2002-02-17T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2002-11-03T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2002-11-03T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2003" : helpers.makeTestYear("America/Sao_Paulo", [
		["2003-02-16T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2003-02-16T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2003-10-19T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2003-10-19T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2004" : helpers.makeTestYear("America/Sao_Paulo", [
		["2004-02-15T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2004-02-15T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2004-11-02T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2004-11-02T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2005" : helpers.makeTestYear("America/Sao_Paulo", [
		["2005-02-20T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2005-02-20T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2005-10-16T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2005-10-16T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2006" : helpers.makeTestYear("America/Sao_Paulo", [
		["2006-02-19T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2006-02-19T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2006-11-05T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2006-11-05T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2007" : helpers.makeTestYear("America/Sao_Paulo", [
		["2007-02-25T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2007-02-25T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2007-10-14T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2007-10-14T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2008" : helpers.makeTestYear("America/Sao_Paulo", [
		["2008-02-17T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2008-02-17T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2008-10-19T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2008-10-19T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2009" : helpers.makeTestYear("America/Sao_Paulo", [
		["2009-02-15T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2009-02-15T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2009-10-18T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2009-10-18T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2010" : helpers.makeTestYear("America/Sao_Paulo", [
		["2010-02-21T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2010-02-21T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2010-10-17T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2010-10-17T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2011" : helpers.makeTestYear("America/Sao_Paulo", [
		["2011-02-20T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2011-02-20T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2011-10-16T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2011-10-16T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2012" : helpers.makeTestYear("America/Sao_Paulo", [
		["2012-02-26T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2012-02-26T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2012-10-21T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2012-10-21T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2013" : helpers.makeTestYear("America/Sao_Paulo", [
		["2013-02-17T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2013-02-17T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2013-10-20T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2013-10-20T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2014" : helpers.makeTestYear("America/Sao_Paulo", [
		["2014-02-16T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2014-02-16T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2014-10-19T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2014-10-19T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2015" : helpers.makeTestYear("America/Sao_Paulo", [
		["2015-02-22T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2015-02-22T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2015-10-18T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2015-10-18T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2016" : helpers.makeTestYear("America/Sao_Paulo", [
		["2016-02-21T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2016-02-21T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2016-10-16T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2016-10-16T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2017" : helpers.makeTestYear("America/Sao_Paulo", [
		["2017-02-19T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2017-02-19T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2017-10-15T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2017-10-15T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"2018" : helpers.makeTestYear("America/Sao_Paulo", [
		["2018-02-18T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["2018-02-18T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["2018-11-04T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2018-11-04T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	])
};