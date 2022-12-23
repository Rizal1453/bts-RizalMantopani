const { ceklis, ceklisitem } = require("../../models");

exports.getceklisitems = async (req, res) => {
  try {
    let data = await ceklisitem.findAll({
      
     
    });

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.addceklisitem = async (req, res) => {
  try {
    const data = req.body;
    await ceklisitem.create(data);

    res.send({
      status: "success",
      message: "Add ceklisitem finished",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.deleteceklisitem = async (req, res) => {
  // code here
  try {
    const { id } = req.params;

    await ceklisitem.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      message: `Delete ceklisitem id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.updateceklisitem = async (req, res) => {
  try {
    const { id } = req.params;

    await ceklisitem.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Update ceklisitem id: ${id} finished`,
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
