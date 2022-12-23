const {user,ceklis} = require("../../models")

exports.getCekliss = async (req,res)=>{
    try {
        let data = await ceklis.findAll({
          include: {
            model: user,
            as: "user",
            attributes: {
              exclude: ["createdAt", "updatedAt", "password"],
            },
          },
          attributes: {
            exclude: ["createdAt", "updatedAt", "idUser"],
          },
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
exports.addCeklis = async(req,res)=>{
  try {
    const data = req.body;
    await ceklis.create(data);

    res.send({
      status: "success",
      message: "Add ceklisfinished",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
}
exports.deleteCeklis = async (req, res) => {
  // code here
  try {
    const { id } = req.params;

    await ceklis.destroy({
      where: { id },
    });

    res.send({
      status: "success",
      message: `Delete ceklis id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.updateCeklis = async (req, res) => {
  try {
    const { id } = req.params;

    await ceklis.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Update ceklis id: ${id} finished`,
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

