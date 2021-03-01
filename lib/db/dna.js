const setupDNA = async (DNAModel) => {
  const findById = async (id) => DNAModel.findById(id);
  const findByDNA = async (dna) => DNAModel.findOne({
    where: {
      dna,
    },
  });
  const create = async (dna) => {
    const result = await DNAModel.create(dna);
    return result.toJSON();
  };
  const findAll = async () => DNAModel.findAll();
  return {
    findById,
    create,
    findAll,
    findByDNA,
  };
};

module.exports = setupDNA;
