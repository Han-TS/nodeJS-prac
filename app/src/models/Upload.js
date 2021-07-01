"use strict";

const UploadStorage = require("./UploadStorage");

// User 클래스
class Upload {
  constructor(body) {
    this.body = body;
  }

  async create() {
    const poster = this.body;
    try {
      const response = await UploadStorage.create(poster);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Upload;