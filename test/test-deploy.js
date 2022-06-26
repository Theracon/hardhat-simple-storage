// @ts-nocheck
const { ethers } = require("hardhat")
const { assert } = require("chai")

describe("SimpleStorage", function () {
  let SimpleStorageFactory, simpleStorage

  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await SimpleStorageFactory.deploy()
  })

  it("Should have an initial favoriteNumber of 0", async function () {
    const favoriteNumber = await simpleStorage.retrieve()
    const expectedFavoriteNumber = "0"

    assert.equal(favoriteNumber.toString(), expectedFavoriteNumber)
  })

  it("Should set the value of favoriteNumber to 100", async function () {
    const expectedFavoriteNumber = "100"
    const txResponse = await simpleStorage.store(expectedFavoriteNumber)
    await txResponse.wait(1)

    const favoriteNumber = await simpleStorage.retrieve()

    assert.equal(favoriteNumber.toString(), expectedFavoriteNumber)
  })

  it("Should add two numbers correctly", async function () {
    const firstNumber = 1
    const secondNumber = 2
    const sum = firstNumber + secondNumber
    const result = await simpleStorage.sum(firstNumber, secondNumber)

    assert.equal(result.toString(), sum.toString())
  })

  it("Should return the initial size of people array", async function () {
    const len = await simpleStorage.getPeopleCount()

    assert.equal(len.toString(), "0")
  })

  it("Should return the size of people array after adding one person", async function () {
    await simpleStorage.addPerson("name", 10)
    const len = await simpleStorage.getPeopleCount()

    assert.equal(len.toString(), "1")
  })
})
