	/*!
 * Fierce Planet - Resource types
 *
 * Copyright (C) 2011 Liam Magee
 * MIT Licensed
 */

var ResourceType = require('./../../models/resource').ResourceType;


var ResourceTypes = ResourceTypes || {};

(function() {
	// Economic resources
	this.FARM_RESOURCE_TYPE = new ResourceType("Farm", "farm", "/javascripts/fp-core/images/icons/truck.png", 10, 20, 100, 20);
	this.SHOP_RESOURCE_TYPE = new ResourceType("Shop", "shop", "/javascripts/fp-core/images/icons/basket.png", 15, 25, 150, 30);
	this.BANK_RESOURCE_TYPE = new ResourceType("Bank", "bank", "/javascripts/fp-core/images/icons/dollars.png", 20, 30, 200, 50);
	this.FACTORY_RESOURCE_TYPE = new ResourceType("Factory", "factory", "/javascripts/fp-core/images/icons/factory-2.png", 25, 40, 250, 70);
	this.STOCKMARKET_RESOURCE_TYPE = new ResourceType("Stockmarket", "stockmarket", "/javascripts/fp-core/images/icons/stockmarket.png", 30, 50, 300, 90);


	// Environmental resources
	this.FRESH_WATER_RESOURCE_TYPE = new ResourceType("Fresh Water", "water", "/javascripts/fp-core/images/icons/recycled-water.png", 10, 20, 100, 10);
	this.WILDLIFE_PARK_RESOURCE_TYPE = new ResourceType("Wildlife Park", "park", "/javascripts/fp-core/images/icons/butterfly.png", 15, 25, 150, 15);
	this.CLEAN_AIR_RESOURCE_TYPE = new ResourceType("Clear Air", "air", "/javascripts/fp-core/images/icons/renewable.png", 20, 30, 200, 25);
	this.GREEN_ENERGY_RESOURCE_TYPE = new ResourceType("Green Energy", "energy", "/javascripts/fp-core/images/icons/eco-power.png", 25, 40, 250, 35);
	this.BIODIVERSITY_RESOURCE_TYPE = new ResourceType("Biodiversity", "biodiversity", "/javascripts/fp-core/images/icons/biodiversity.png", 30, 300, 100, 45);


	// Social resources
	this.CLINIC_RESOURCE_TYPE = new ResourceType("Clinic", "clinic", "/javascripts/fp-core/images/icons/bandaid.png", 10, 20, 100, 5);
	this.SCHOOL_RESOURCE_TYPE = new ResourceType("School", "school", "/javascripts/fp-core/images/icons/abc.png", 15, 25, 150, 8);
	this.LEGAL_SYSTEM_RESOURCE_TYPE = new ResourceType("Legal System", "legal", "/javascripts/fp-core/images/icons/scales.png", 20, 30, 200, 15);
	this.DEMOCRACY_RESOURCE_TYPE = new ResourceType("Democracy", "democracy", "/javascripts/fp-core/images/icons/microphone.png", 25, 40, 250, 20);
	this.FESTIVAL_RESOURCE_TYPE = new ResourceType("Festival", "festival", "/javascripts/fp-core/images/icons/martini.png", 30, 50, 300, 25);

    this.WASTE_RESOURCE_TYPE = new ResourceType("Waste", "waste", "/javascripts/fp-core/images/icons/liquid-waste.png", 10, 20, 100, 5);


	// Additional resources - uncategorised
	this.AEROPLANE = new ResourceType("Aeroplane", "aeroplane", "/javascripts/fp-core/images/icons/aeroplane.png", 30, 50, 300, 25);
	this.TRAVEL_RESOURCE_TYPE = new ResourceType("Travel", "travel", "/javascripts/fp-core/images/icons/van.png", 30, 50, 300, 25);



	/**
	 * Resources assigned to profile class capabilities (@link Profile)
	 *
	 * TODO: Use actual resource types instead
	 */
	this.NOVICE_CAPABILITIES = ["farm", "water", "clinic"];
	this.PLANNER_CAPABILITIES = this.NOVICE_CAPABILITIES.concat(["shop", "park", "school"]);
	this.EXPERT_CAPABILITIES = this.PLANNER_CAPABILITIES.concat(["bank", "air", "legal"]);
	this.VISIONARY_CAPABILITIES = this.EXPERT_CAPABILITIES.concat(["factory", "energy", "democracy"]);
	this.GENIUS_CAPABILITIES = this.VISIONARY_CAPABILITIES.concat(["stockmarket", "biodiversity", "festival"]);
	
}).apply(ResourceTypes);

if (typeof exports !== "undefined")
	exports.ResourceTypes = ResourceTypes;
